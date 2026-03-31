---
title: "Code is communication"
created_at: 2026-03-30T00:00:00-03:00
updated_at: 2026-03-31T01:30:51-03:00
type: post
status: published
cover_image: "/images/blog/code-is-communication-cover.jpg"
tags:
  - engineering
  - research
  - language
tier: 1
pillar: language and meaning
excerpt: "A 2026 study measured LLM perplexity and human EEG responses against the same confusing code. The spikes correlated. The machine gets confused by the same code that confuses you — and that tells you something important about what code has always been."
lang: en
---

Put the same confusing code in front of humans wired to EEG sensors and language models measuring perplexity. The confusion spikes appear in the same place, at the same amplitude. Researchers ran this with high-entropy snippets — constructs where meaning is hard to predict from form — and the two instruments agreed. It wasn't an isolated finding — prior work had already shown that higher-perplexity code lowers human accuracy (Casalnuovo et al., 2020), and that a token's perplexity linearly predicts how long we take to read it (Goodkind & Bicknell, 2018).

The machine gets confused by the same code that confuses you.

This is not a quirk of model architecture. It is a consequence of a much older claim about what code is.

---

## Code as a communicative act

> "Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do."
> Donald Knuth, 1984.

Abelson and Sussman said the same thing that year: "Programs must be written for people to read, and only incidentally for machines to execute."

We have been quoting these lines for forty years. The deeper implication has stayed in the background.

Naur was more direct. In "Programming as Theory Building" (1985), he said the program is not the artifact. The program is the *theory* — the shared understanding that exists in the minds of the people who built it. Source code is a *lossy representation* of that theory. When the team disperses, the theory dies. Rebuilding from documentation alone is, in his words, **strictly impossible.**

If Naur is correct, then every clean code practice is a strategy for minimizing that loss — to keep the theory of the system transmissible across time and teams. Meaningful naming is how you compress the theory's concepts into identifiers, and code reviews are how you verify that one mind's theory transferred successfully to another's.

Robert "Uncle Bob" Martin quantified the asymmetry: "The ratio of time spent reading versus writing is well over 10 to 1." You write it once, but others read many times. This is not a metaphor. It is the structural reality of the practice.

This has been the implicit premise of serious software engineering for forty years. What is new is that we now have empirical proof from an unexpected source.

---

## What LLMs reveal

Large language models are trained on human-written code. They learn by predicting the next token from the statistical patterns of millions of codebases. In doing so, they internalize the same patterns that make code legible to programmers. This makes them an unexpected instrument for testing the communicative thesis — if human readability and machine tractability truly converge, LLM performance should degrade on the same code that degrades human comprehension.

And the data points to an answer: It does.

Identifier names make up approximately 70% of source code (Hilton & Hermans, PPIG 2017) — they are the dominant communicative act in programming. Wang et al. (2024) tested what happens when those names are stripped of their semantic content. They created versions of code with anonymized or misleading variable, method, and function names, then measured model performance on analysis tasks. In Python, anonymizing all three types of names dropped accuracy to 23.73%. Code that was perfectly comprehensible with meaningful names became nearly impossible to understand with meaningless ones — to the model.

Jain et al. (ICLR 2024) ran a complementary experiment: cleaning training data by renaming variables descriptively, modularizing complex functions, and inserting natural-language planning comments. Result: direct improvement in LLM code generation quality. Making code more readable made models better at working with it.

A 2025 study (arXiv 2508.11958) found that more than 85% of code smells in training data propagate into LLM outputs — and that cleaning training data for readability eliminated the propagation while improving downstream performance.

Two 2025–2026 studies push the convergence further. EyeLayer (ICPC 2026) fed human eye-gaze patterns into LLM-based code summarization and achieved gains of up to 13.17% on BLEU-4. HumanLLM (FSE 2025) applied eye-tracking path augmentation and achieved +7.16 in CodeBLEU. Human attention during code reading is now a literal training signal — where programmers look when they read code directly improves what models produce.

---

## The convergence is not a coincidence

The mechanism behind this is not mysterious at all.

Descriptive names tokenize into meaningful subwords. `calculateTotalPrice` becomes `["calculate", "Total", "Price"]` — semantic content is preserved across word boundaries. `x7_tmp` becomes `["x", "7", "_", "tmp"]` — noise. The model has something to work with in the first case and almost nothing in the second.

Well-decomposed functions have clearer data flow. Both humans and LLMs degrade on deeply nested, high-complexity code — humans because of working memory limits and models because they optimize locally without accounting for global context.

The naturalness hypothesis (Hindle et al., ICSE 2012) measured this quantitatively: code is even more repetitive and predictable than natural language. The conventions that make code readable — consistent naming, standard patterns, familiar structures — are exactly what makes code **low-noise**. High-quality code is statistically easier to predict because it is more conventional.

This is where it gets interesting. LLMs read left-to-right. We don't — we scan, pattern-match on structure, jump around. Verbose docstrings and explicit type annotations help models; an experienced human reader skips them. The differences are real.

But look at what converges: the signals that matter most — meaningful names, clear structure, consistent conventions — are the same for both sides. What humans and machines find readable in code overlaps because LLMs learned these patterns from us.

---

## The implication

None of this changes what you should be doing. The implication of the convergence is that the argument for writing readable code just got stronger — and the data to back it up arrived from an unexpected direction.

We already had the human-centered argument: readable code is cheaper to maintain, safer to modify, easier to review. The cost of code is overwhelmingly in reading and comprehension, not in writing it.

Now we have the AI-centered argument: the same properties that make code readable to humans make it more tractable for every LLM tool in our workflow — code completion, review, refactoring, generation. When our codebase has meaningful names and a clean, organized structure, we are not just communicating with the next human reviewer. We are communicating with every AI tool that touches it.

This is not a new constraint imposed by AI tooling. It is a confirmation of something good software engineering always knew, now arriving from a direction that makes it measurable.

### What that means in practice

If human readability and model readability converge, naming stops being a matter of preference. `processData` communicates almost nothing — to the human reviewer or to the model completing the code next. `normalizeTransactionAmounts` does real communicative work in both directions. It's tempting to name quickly and refactor later. But naming is where most of the semantic work lives — and the cost of naming poorly accumulates across every reading.

Code review gains a new axis: how much meaning is packed into the names? A comment flagging an ambiguous name is not subjective preference. It's identifying something that will impair every reader — human or machine — for as long as that code exists.

For teams using AI tools, there's more: the codebase we maintain is training data. That 85% code smell propagation finding runs in both directions — clean code generates clean suggestions; ambiguous code generates more of the same. This isn't a reason to panic about technical debt. It's a reason to treat naming conventions as work with measurable downstream effects, not just on maintainability, but on the quality of everything the model suggests next.

Knuth said programs are works of literature addressed to human readers. What he could not have anticipated is that a new class of readers would arrive and prove him right.

---

## References

**Neurophysiological evidence**

- [Casalnuovo et al. (2020). *Does surprisal predict code comprehension difficulty?* CogSci.](https://cognitivesciencesociety.org/cogsci20/papers/0102/0102.pdf)
- [Goodkind & Bicknell (2018). *Predictive power of word surprisal for reading times is a linear function of language model quality.* CMCL.](https://aclanthology.org/W18-0102/)
- [Anonymous (2026). *How do humans and LLMs process confusing code?* ICPC.](https://arxiv.org/abs/2508.18547)

**Naming and LLM performance**

- [Wang et al. (2024). *How does naming affect LLMs on code analysis tasks?*](https://arxiv.org/abs/2307.12488)
- [Jain et al. (2024). *LLM-assisted code cleaning for training accurate code generators.* ICLR.](https://arxiv.org/abs/2311.14904)
- Anonymous (2025). *Clean code, better models.* [arXiv:2508.11958](https://arxiv.org/abs/2508.11958)

**Human attention and LLMs**

- [Anonymous (2026). *EyeLayer: human eye-gaze augmentation for code summarization.* ICPC.](https://arxiv.org/abs/2602.22368)
- [Zhang et al. (2025). *Enhancing code LLM training with programmer attention.* FSE.](https://arxiv.org/abs/2503.14936)

**Naturalness and readability**

- [Hindle et al. (2016). *On the naturalness of software.* CACM.](https://dl.acm.org/doi/10.1145/2902362)
- [Hilton & Hermans (2017). *Naming guidelines for professional programmers.* PPIG.](https://ppig.org/files/2017-PPIG-28th-hilton.pdf)

**Classic texts**

- Knuth, D. (1984). Literate programming. *The Computer Journal, 27*(2), 97–111.
- Naur, P. (1985). Programming as theory building. *Microprocessing and Microprogramming, 15*(5), 253–261.
- Martin, R. C. (2008). *Clean Code: A Handbook of Agile Software Craftsmanship.* Prentice Hall.
