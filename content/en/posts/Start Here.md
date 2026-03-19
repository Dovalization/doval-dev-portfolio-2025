---
title: "Start Here"
created_at: 2026-03-19T00:00:00-03:00
updated_at: 2026-03-19T00:00:00-03:00
type: post
status: published
tags:
  - engineering
  - design
  - ai
tier: 3
cover_image: "/images/blog/start-here-cover.jpg"
excerpt: "What this blog is, how it's organized, how it's built, and where to start depending on what you're looking for."
lang: en
---

This blog exists at the intersection of engineering craft, design thinking, and AI. The perspective is a practitioner's, not academic or a hot-take feed. This is a place where I think about problems that don't have clean answers.
The intended reader is whoever builds software and cares about whether it works and why. That means engineers, designers, product managers, and the rare person who is genuinely all three. Most technical blogs pick one. This one doesn't — the interdisciplinary approach is the point.

---

## Two tracks

The blog runs on two parallel tracks that share intellectual substrate but are structured differently.

**Essays** are argument-driven. Each one takes a claim seriously, brings evidence to bear, and reaches a conclusion that might be wrong. The format ranges from short-form data analysis (400–800 words, one finding) to rigorous original work with academic citations and reproducible methodology (1,500–3,000 words). The requirements are: an original angle, evidences the author actually engaged with, and a finding — not just an opinion.

**Devlogs** are process-oriented. Right now there is only one devlog series: Interpretant, a research project tracking the semantic drift of 30 concepts across 200 years of text using temporal word embeddings. Each entry is a technical narrative — what worked, what broke, what the data showed, what changed in the methodology. Code, corpus statistics, visualizations, failure modes.

The two tracks cross-link deliberately. The essays articulate the conceptual framing while the devlogs show the empirical machinery behind it. Eventually the devlog series will generate enough data to write a genuine Tier 1 research essay — the devlogs will be the methodology record.

---

## Five pillars

Content is organized into five pillars. A pillar isn't just a tag — it's a sustained argument, a lens that multiple posts share. Think of it as a series that shares a point of view rather than a topic category.

**AI in production** — What AI is actually good for in software systems, what it isn't, what the data says versus what the discourse says. Not hype, not doomerism. The question is always: what is the right tool for this specific problem?

**Interface as communication** — Every UI is making an argument about what the user is doing and what the software thinks is important. Design decisions are about communication, not just aesthetic choices. This pillar treats interfaces as something to read, not just use.

**Research applied to practice** — Academic papers rarely translate cleanly into engineering decisions. This pillar does that translation: read the paper, run the numbers, find the practitioner takeaway — attempted replication, reproducible code, a methodological finding that cuts against the obvious interpretation.

**Engineering craft meets product** — Architecture decisions have human costs. Abstraction choices communicate organizational priorities. This pillar is about the moments where the technical and the product are the same decision, and what happens when you treat them separately.

**Language and meaning** — Words travel across disciplines carrying different meanings. "Agent" means something different to a philosopher, a sociologist, and an ML researcher — and these differences matter. This pillar maps that territory: semantics, semiotics, syntax and how concepts mutate as they move.

---

## Three tiers

Within the essay track, posts are classified by depth and scope.

**Tier 1** is original analysis: attempted replication of research, academic citations, reproducible methodology, a finding that required original work to produce. These take the longest and publish least often.

**Tier 2** is a single finding: one claim, one dataset, one conclusion. Short (400–800 words), high data density, no filler. The format is: claim → data → methodology → finding. You should be able to reproduce it.

**Tier 3** is a technical breakdown or design insight: practitioner-level depth on a specific decision, pattern, or tradeoff. Real code or data where relevant. 800–1,500 words.

Devlogs exist outside of the tier system. They're a different format with different goals.

---

## Where to start

Depending on what you're looking for:

**If you build systems that use AI** — start with [Stop Reaching for the LLM](/en/blog/stop-reaching-for-the-llm). It's a decision framework for when to reach for an LLM versus a rules engine, classical ML, or nothing at all. XGBoost, GPT-4, and a concrete flowchart.

**If you follow AI labor market research** — read [How Anthropic Measures AI Exposure](/en/blog/how-anthropic-measures-ai-exposure). It documents what the Anthropic paper actually measured, what's publicly reproducible, where the chain of evidence breaks, and what the replication gap reveals about measurement infrastructure.

**If you're interested in how language and meaning work** — start with [Interpretant Devlog 01](/en/blog/interpretant-devlog-01). It explains the research project, the corpus (240 books, 27 million words, 200 years), and the methodology for tracking semantic drift over time. Wittgenstein in the introduction, TWEC in the methodology section.

---

## How it's built

The blog previously ran on Ghost CMS at a separate subdomain. Ghost has no multilingual support, and a blog living at `blog.doval.dev` wasn't contributing anything to the portfolio it was supposed to complement. Moving it in-house meant it would live at `doval.dev/en/blog/[slug]`, get proper i18n routing, and become a showcase piece for the frontend skills I claim on my resume.

The stack is deliberately minimal: `gray-matter` parses frontmatter, `next-mdx-remote/rsc` compiles markdown to React server components, a small rehype pipeline handles syntax highlighting, heading anchors, and image unwrapping, and Zod validates frontmatter at parse time. No database, no CMS API, no runtime fetching — posts are `.md` files committed alongside the code. Publishing is a `status: draft` → `status: published` change in frontmatter followed by a push to Vercel.

For content editing, Keystatic provides a visual admin UI at `/keystatic` without being a separate service. It runs alongside the app in local mode, reading and writing the same files directly. The schema in `keystatic.config.ts` mirrors the Zod validation, so structure is enforced at both the editing and read layer — no cloud dependency, no sync, nothing changes about how the build works.

Instead of a typography plugin, every markdown element maps to an explicit React component — `BlogA` for links, `BlogPre` for fenced blocks, and so on. This gives complete control over styling. The exception is `BlogImageComponent`, which needs `useState` for a lightbox — it lives in its own file, keeping everything else as server components. Blog content is essentially JavaScript-free except for image zoom.

When a post is ready:

1. Write the post
2. Copy to `content/en/posts/` in the portfolio repo — or edit directly via Keystatic
3. Change `status: draft` to `status: published`
4. Translate to PT-BR and save to `content/pt/posts/`
5. Commit and push — Vercel rebuilds, both versions go live

