---
title: "The Wrong Way to Use an LLM"
created_at: 2026-04-16T00:00:00-03:00
updated_at: 2026-04-16T00:00:00-03:00
type: post
status: published
cover_image: "/images/blog/wrong-way-llm-cover.jpg"
tags:
  - engineering
  - automation
  - parenting
  - ai
tier: 2
pillar: Engineering craft meets product
excerpt: "The school sends notifications through a proprietary app. Requests for diapers, photos, and signed forms are buried in the same feed as activity pictures and greetings. I stopped missing them by reverse engineering the API and building a pipeline that reads every message, extracts the action items, and puts them in Todoist before 8am."
lang: en
---

Most pipelines that use LLMs for classification make the same mistake: they ask the model to do too much. Extract the data, parse the date, decide if it's actionable, format the output. The result is a system that behaves differently each run — same input, subtly different output — and deduplication logic that fails in ways that are hard to trace.

The right boundary is narrower than it looks. The LLM should extract. Everything else should be code.

I built a concrete example of this while solving a minor parenting problem. My son's daycare communicates through a proprietary mobile app — a flat notification feed where requests for diapers and signed forms compete with activity photos and thank-you notes. Things were getting missed. So I reverse-engineered the API and built a pipeline to turn school messages into Todoist tasks before 8am.

---

## Finding the API

The app has a web interface. Web interfaces make HTTP requests. HTTP requests can be inspected.

I opened Chrome DevTools, logged into the web app, and watched the Network tab. Within a few minutes the pattern was obvious: every action fired a `POST` to `/services/gateway.php` with a JSON body in the form `{"class": "...", "method": "...", "parameters": {...}}`. A classic RPC-over-HTTP design — no REST, no GraphQL, just a single endpoint that dispatches by method name.

Login posts credentials to a separate endpoint. The response includes a `registerCode` — a school identifier used in every subsequent request. From there, the notification API is two calls:

1. `getNotificationContactsV2` — returns the list of channels (one per teacher or group)
2. `getNotificationsV2` — given a channel ID, returns the messages

Each message has a `mimeType` field: `text/plain`, `application/pdf`, or `image/*`. The school sends all three.

---

## An Unexpected Finding

A few headers were required to get valid responses:

```
Content-Type: application/octet-stream
No-Crypt: true
Request-Type: parents
Use-UTF8: true
```

The `No-Crypt: true` header was the interesting one — and not in a good way.

The app has an encrypted transport mode. This header disables it. The server accepts the instruction without question and returns plain JSON. The client controls whether encryption happens.

This is a significant design flaw. Proper transport encryption is server-enforced: the server decides whether to encrypt, and the client has no say. When the client can opt out by sending a header, the encryption is theater. Any attacker who intercepts the connection and knows this header — discoverable in minutes from DevTools — gets plaintext data without breaking anything. No key required.

All the parent and student data flowing through this app: messages, photos, medical records, contact information, pickup authorizations. Accessible in plaintext to anyone on the same network who knows to send one header. The school presumably thinks the data is encrypted. It is not, for anyone who asks nicely.

I am reporting this to the vendor. If you build apps that handle children's data: server-enforced encryption is not optional.

---

## Figuring Out What's Worth Reading

Text messages are easy — the content is right there. PDFs were more interesting. The weekly planning document is always a PDF: a structured table showing each day's activities, with action items buried in the cells. "Send a mother-son photo by Friday, April 17th" appears in row four of a five-row table about art projects.

Images I skip entirely. The school sends a lot of activity photos. I could run OCR or vision models on them, but the false positive rate would be high and the true positive rate low. Skipping images was the right call.

For PDFs, I use `pypdf` to extract text from each page and feed it to the classifier as if it were a text message. The extraction is imperfect — table formatting doesn't survive — but the content is legible enough for an LLM to work with.

---

## Letting the LLM Do the Language Part

This is where the design gets interesting, because there's a failure mode I wanted to avoid.

The naive approach is to ask the LLM: "Is this actionable? What's the task? What's the due date?" Return everything as a structured object, send it to Todoist.

The problem: LLMs are non-deterministic. The same message on Tuesday might produce "due: 2026-04-17" and on Thursday produce "due: next Friday". At non-zero temperature, the model is inventing interpretations rather than extracting facts. If you run the same pipeline twice, you get two tasks with different titles that look like different things, and your deduplication logic fails silently.

I wrote about this pattern in more detail [in a previous post](/en/blog/stop-reaching-for-the-llm): use LLMs for language understanding and deterministic code for reasoning. The rule is: the LLM should extract, not compute.

So the schema I ask the LLM to return has exactly three fields:

```json
{
  "is_actionable": true,
  "task_description": "Send mother-son photo",
  "due_description": "Friday April 17th"
}
```

Note what's missing: `due_date`. I do not ask the LLM to parse a date. I ask it to copy the exact phrase from the message verbatim. The date parsing happens in code.

```python
def _parse_due_date(description: str, message_date: date, today: date) -> date | None:
    # Pass 1: explicit DD/MM or DD/MM/YYYY via regex
    explicit = re.search(r"\b(\d{1,2})/(\d{1,2})(?:/(\d{4}))?\b", description)
    if explicit:
        day, month, year_str = explicit.groups()
        # ...

    # Pass 2: relative expressions via dateparser
    result = dateparser.parse(description, languages=["pt"], settings={
        "RELATIVE_BASE": datetime.combine(message_date, datetime.min.time()),
        "PREFER_DATES_FROM": "future",
    })
```

Two things worth noting. First, the two-pass approach: explicit `DD/MM` patterns first, then `dateparser` for relative expressions like "tomorrow" or "next week". The regex handles the common case faster and more reliably. Second, `RELATIVE_BASE` is set to the message's own send date — not today. If a message from April 6th says "bring supplies tomorrow", "tomorrow" should resolve to April 7th, not to whenever the pipeline runs next.

---

## Deduplication

The first live run produced a duplicate task. The weekly PDF contained "Send a mother-son photo by Friday, April 17th" and a follow-up text message two days later repeated the same request with slightly different wording. Two notifications, same request. The LLM correctly identified both as actionable and produced two slightly different task titles.

The dedup logic has two layers.

1. **Exact notification ID matching.** Every Todoist task created by the pipeline carries a `notif_id:12345678` token in its description. On each run, we fetch all open school tasks, extract these tokens, and skip any notification whose ID is already present. This handles the case where the pipeline re-processes a message it already acted on — which can happen if the watermark logic fails.
2. **Fuzzy title matching, scoped by time.** For the PDF-plus-follow-up case, the two notifications have different IDs, so layer one won't catch them. We use `difflib.SequenceMatcher` to compare the new task title against existing open tasks. If the similarity ratio exceeds 75%, we skip it.

The critical constraint: we only compare against tasks whose notification date is within seven days of the current notification. This prevents the pipeline from treating "Bring diapers" in week one and "Bring diapers" in week three as duplicates. Same words, completely different request. The time window is what separates "follow-up about the same thing" from "recurring supply request".

```python
def _is_follow_up_duplicate(title, notif_date, index):
    window = timedelta(days=7)
    for existing_title, existing_date in index:
        if existing_date and abs(notif_date - existing_date) > window:
            continue
        ratio = SequenceMatcher(None, title.lower(), existing_title.lower()).ratio()
        if ratio >= 0.75:
            return existing_title
    return None
```

---

## The Dry-Run Bug

The pipeline has a `--dry-run` flag: classify messages and show the output, but don't create Todoist tasks. I used it to validate the LLM output before running it live.

The first dry run looked correct — two messages found, one actionable, right due date. I ran it live. Zero messages found. I ran it again. Still zero.

The culprit was the watermark. Watermarking is how the pipeline avoids reprocessing: for each notification channel, we persist the highest message ID we've seen. On the next run, anything at or below that ID is skipped.

The `--dry-run` flag only suppressed task creation. The watermark update happened in the fetch layer, which had no knowledge of whether the caller was doing a dry run. So the dry run fetched the messages, advanced the watermark to the latest ID, and saved it to disk. The subsequent live run loaded that watermark, found nothing new above it, and returned immediately. The dry run had consumed the messages without acting on them.

The fix was one line:

```python
notifications = fetch_new_notifications(
    client,
    ignore_watermark=fetch_all or dry_run  # dry-run must not advance the watermark
)
```

Dry runs should have no side effects. It is easy to violate when the side effect lives in a layer the flag doesn't reach.

---

## What It Looks Like in Practice

The pipeline runs at 7am via a macOS launchd job. By the time we're having breakfast, any new school request is already in Todoist with the appropriate due date.

The output for a typical run:

```
Found 2 new message(s) from school
Classifying with LLM...

Actionable requests (1 found):
  [Vicente] Bring diapers (due: 2026-04-17)
    Good afternoon! We're running low on diapers...

Created 1 Todoist task
```

The other message — a photo of Vicente doing something with paint — produced `is_actionable: false` and was correctly ignored.

---

## What This Is Actually About

The interesting thing about this project is not the scraping. Reverse engineering an RPC API from DevTools is a half-hour exercise. The interesting part is the hybrid design: where the LLM responsibility ends and the code responsibility begins.

The LLM reads the message and understands that "send a mother-son photo by Friday" is a deadline. It understands that "bring diapers" is a request directed at parents and not a general announcement. It understands that a photo of Vicente painting is not something we need to act on. This is language understanding — the LLM's actual domain.

The LLM does not decide which dates are in the future. It does not decide whether two tasks are semantically equivalent. It does not decide whether a watermark should be advanced. These are reasoning operations on structured data. Code is better at them, runs faster, costs nothing per token, and produces the same answer every time.

Split the work at that boundary and you get a system that is both flexible and reliable. The LLM handles the part that would take a page of regex to approximate. The code handles the part that a page of regex would handle correctly.

We haven't missed a school request since.
