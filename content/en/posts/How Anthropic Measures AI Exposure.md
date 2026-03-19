---
title: "How Anthropic measures AI exposure — and what happens when you try to replicate it"
created_at: 2026-03-11T00:00:00-03:00
updated_at: 2026-03-11T00:00:00-03:00
type: post
status: published
cover_image: "/images/blog/anthropic-exposure-cover.jpg"
tags:
  - ai
  - economics
  - research
tier: 1
pillar: AI in production
excerpt: "Anthropic's labor market chart shows theoretical AI exposure above 90% for finance, law, and tech. I tried to reproduce it. It holds directionally — but exact replication is structurally impossible, and the reason reveals more about AI measurement than the chart."
lang: en
---

In March 2026, Anthropic published "Labor market impacts of AI" (Massenkoff & McCrory, 2026). One chart from the paper circulated widely: a radar showing theoretical AI exposure above 90% for finance, law, and tech occupations. The reaction was immediate — product decisions, hiring plans, and strategic roadmaps revisited in real time.

I read the paper. Then I tried to reproduce the chart. This is what we found.

This article documents what Anthropic did, what's publicly replicable, and where the chain of evidence breaks.

---

## What figure 2 actually shows

Figure 2 presents two values for each of 22 SOC major occupational groups:

- **Theoretical exposure** (blue): the fraction of tasks in an occupation that LLMs could plausibly assist with, based on pre-adoption task analysis
- **Observed exposure** (red): the fraction of tasks in that occupation where Claude is actually being used, based on Anthropic's real usage data

The gap between blue and red is the chart everyone shared. It's real, but understanding what it measures — and what it doesn't — requires tracing each value back to its source.

![Radar chart showing theoretical vs observed AI exposure by major occupational group](/images/blog/anthropic-exposure-figure2.png)

---

## The theoretical side: Eloundou et al. (2023)

The blue values originate in a 2023 paper by Eloundou, Manning, Mishkin, and Rock — "GPTs are GPTs: An early look at the labor market impact potential of large language models." The paper introduced a framework for scoring occupational tasks by their LLM exposure.

Their key output is a set of β scores at the task level, derived from O*NET's occupational task database.

Each task is classified as:

- **E0**: no meaningful LLM exposure
- **E1**: direct LLM exposure (the task itself can be assisted by an LLM)
- **E2**: LLM-assisted exposure (requires an LLM-powered tool, but not direct prompting)

For Anthropic's Figure 2, these are binarised: any task classified as E1 or E2 receives β = 1; E0 tasks receive β = 0. The theoretical exposure for an occupation is then the employment-weighted mean of its task β scores.

The data is publicly available via the [GPTs-are-GPTs GitHub repository](https://github.com/openai/GPTs-are-GPTs), with occupation-level aggregations in occ_level.csv.

---

## The observed side: Anthropic's Economic Index

The red values come from **Anthropic's own Economic Index** dataset, published on [HuggingFace](https://huggingface.co/datasets/Anthropic/EconomicIndex). The key file is job_exposure.csv, which contains an observed_exposure score for each 6-digit SOC occupation code.

These scores are derived from Anthropic's internal Claude usage logs. The methodology, described in Tamkin & McCrory (2025), involves:

1. Extracting task descriptions from actual Claude conversations
2. Mapping those tasks back to O*NET occupational task categories
3. Computing the fraction of each occupation's tasks that appear in Claude usage

This data is publicly released at the occupation level. What's *not* released is the intermediate step between raw usage and the occupation-level scores.

---

## The two-step aggregation — and the missing piece

To go from occupation-level scores to the 22 major group values in Figure 2, the paper uses a two-step employment-weighted aggregation:

1. Average task-level scores to the occupation level, weighted by **time fractions** — estimates of how much of a worker's time is spent on each task within their occupation.
2. Average occupation-level scores to the major-group level, weighted by **total employment** from the BLS Occupational Employment and Wage Statistics (OES) survey, May 2023.

**The BLS employment data is publicly available. The time-fraction weights are not.**

These time fractions come from Tamkin & McCrory (2025), derived by prompting Claude to estimate hours spent per task per occupation. They function as internal weights that adjust the contribution of each task based on how much of the working day it actually occupies — which is different from simply counting tasks equally.

Neither the time-fraction weights nor the intermediate occupation-level values that incorporate them are published in the HuggingFace repository or in any supplementary materials.

---

## What we were able to replicate

Using the publicly available data — Eloundou β-scores, Anthropic's Economic Index occupation-level scores, and BLS OES May 2023 employment counts — we reconstructed Figure 2 as closely as possible.

The occupation-level validation holds well. The observed exposure for Computer Programmers (SOC 15-1251) in our reproduction is **74.5%**, against the paper's reported ~75%.

At the major-group level, we diverge modestly. For Computer & Mathematical occupations, our theoretical estimate is 92.9% against the paper's 94%, and our observed estimate is 35.4% against the paper's 33%. For Office & Administrative Support, our theoretical estimate is 87.9% against the paper's 90%. The gap is consistent — roughly 1–2 percentage points — and systematic across groups. The direction is clear even if the exact values differ.

The full code and data are available at this [GitHub repository](https://github.com/Dovalization/ai-labor-exposure-replication).

---

## Why exact replication is structurally impossible

The 1–2pp divergence traces to a single private intermediate step: the time-fraction weights.

When Anthropic aggregates task-level scores to the occupation level, they don't weight tasks equally. A task that occupies 40% of a worker's day counts more than one that occupies 5%. This is methodologically correct — it's a better approximation of true exposure than raw task counts. But without the specific hour estimates Claude generated for each task-occupation pair, we cannot replicate the weighting.

This is not a criticism. The time-fraction estimates involve proprietary model outputs and internal methodological choices that Anthropic isn't obligated to publish. The paper is transparent about what it does — the limitation is structural, not evasive.

The result is that Figure 2 is **directionally reproducible** with public data, but **not exactly replicable**.

---

## What the broader literature says about the gap

Replicating the chart tells you what the gap is. It doesn't tell you what it means. For that, the paper's own citations — and the research around them — are more instructive than the chart itself.

The most striking pattern in the adjacent literature is the micro-macro disconnect. Individual productivity experiments consistently show 14–56% gains for workers using LLMs (Brynjolfsson, Li & Raymond, 2025; Noy & Zhang, 2023; Peng et al., 2023). But economy-wide data tells a different story: administrative records covering 25,000 workers in Denmark (Humlum & Vestergaard, 2025), Finnish population data (Kauhanen & Rouvinen, 2025), and Yale's Budget Lab (Gimbel et al., 2025) all converge on the same finding — **aggregate effects indistinguishable from zero. People save time. It disappears into organizational friction before it reaches any metric that matters at scale.**

Acemoglu (NBER w32487, 2024) **estimates that only 4.6% of all tasks will be economically viable to automate over ten years** — a fraction of the theoretical exposure figures in Figure 2. The distance between "LLMs could assist with this task" and "automating this task makes economic sense" is the part exposure measures don't capture.

![Grouped bar chart showing theoretical vs observed exposure without area distortion](/images/blog/anthropic-exposure-bar-chart.png)

![Lollipop chart showing the gap between theoretical and observed exposure, sorted by gap size](/images/blog/anthropic-exposure-lollipop.png)

The freelancer market may be the exception. Writing, translation, and image-creation demand on gig platforms dropped 20–50% since 2022 (Demirci, Hannane & Zhu, 2025; Teutloff et al., 2025) — a segment with low friction, few institutional protections, and direct task substitution. Whether this is a leading indicator for formal labor markets or a structurally distinct case remains an open question.

---

## What this means for interpreting the chart

The blue-red gap in Figure 2 is real and the direction is robust. Even with our approximate replication, the pattern holds: theoretical exposure is high across professional occupations; observed usage is substantially lower in every category.

What the chart cannot tell us — and what neither Anthropic nor anyone else currently knows — is whether this gap represents untapped opportunity, inherent limits of what the technology can do in practice, or something in between. The paper doesn't claim to answer that.

The methodology is solid, the data is carefully constructed and the conclusions are measured. The gap between what the paper says and what the LinkedIn feed said about it is, arguably, larger than the gap between our replication and the original.

The replication exercise points to something beyond methodology.

The private intermediate step — time-fraction weights — isn't just a technical detail. It represents exactly the kind of measurement infrastructure most organizations don't have: a systematic way of knowing how work actually distributes across tasks, before and after AI adoption. That's what makes the gap hard to close. Not because of capability or adoption rate, but the absence of the right instrumentation to know what's happening at all.

---

## References

**Primary source**

- [Massenkoff & McCrory (2026). *Labor market impacts of AI: A new measure and early evidence.* Anthropic.](https://www.anthropic.com/research/labor-market-impacts)

**Theoretical exposure methodology**

- [Eloundou et al. (2023). *GPTs are GPTs.* OpenAI.](https://github.com/openai/GPTs-are-GPTs)
- [Tamkin & McCrory (2025). *Anthropic Economic Index methodology.* HuggingFace.](https://huggingface.co/datasets/Anthropic/EconomicIndex)
- Bureau of Labor Statistics. *Occupational Employment and Wage Statistics (OES), May 2023.* U.S. Department of Labor.

**Individual productivity gains (14–56%)**

- [Brynjolfsson, Li & Raymond (2025). Generative AI at work. *QJE.*](https://www.nber.org/papers/w31161)
- [Noy & Zhang (2023). Experimental evidence on the productivity effects of generative AI. *Science.*](https://doi.org/10.1126/science.adh2586)
- [Peng et al. (2023). *The impact of AI on developer productivity: Evidence from GitHub Copilot.*](https://arxiv.org/abs/2302.06590)

**Macro / economy-wide evidence**

- [Humlum & Vestergaard (2025). *Large language models, small labor market effects.* NBER WP 33777.](https://www.nber.org/papers/w33777)
- [Kauhanen & Rouvinen (2025). Assessing early labour market effects of generative AI. *Applied Economics Letters.*](https://doi.org/10.1080/13504851.2025.2513973)
- [Gimbel et al. (2025). *Evaluating the impact of AI on the labor market.* The Budget Lab at Yale.](https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs)

**Automation limits and task creation**

- Acemoglu (2024). *The simple macroeconomics of AI.* NBER Working Paper 32487.
- [Acemoglu & Restrepo (2019). Automation and new tasks: How technology displaces and reinstates labor. *Journal of Economic Perspectives, 33*(2).](https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3)
- [Autor et al. (2024). New frontiers: The origins and content of new work. *QJE.*](https://www.nber.org/papers/w30389)

**Freelancer / gig platform displacement**

- [Demirci, Hannane & Zhu (2025). Who is AI replacing? *Management Science.*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4602944)
- [Teutloff et al. (2025). Winners and losers of generative AI. *JEBO.*](https://www.sciencedirect.com/science/article/pii/S0167268124004591)
