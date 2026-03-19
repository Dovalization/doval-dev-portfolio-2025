---
title: "Stop reaching for the LLM: a decision framework for AI in production"
created_at: 2026-03-16T00:00:00-03:00
updated_at: 2026-03-19T00:00:00-03:00
type: post
status: published
cover_image: "/images/blog/stop-reaching-llm-cover.jpg"
tags:
  - ai
  - engineering
  - product
tier: 1
pillar: AI in production
excerpt: "The default move in 2026 is to reach for an LLM. That reflex is costing teams money, latency, and reliability. A decision framework grounded in a LGPD-compliant healthcare pipeline — and everything the industry's sharpest voices are saying about when AI actually earns its place."
lang: en
---

The default move in 2026 is to reach for an LLM. Someone describes a problem, and the first question is: which model, which prompt, which framework? The possibility that a rule engine, a gradient boosted tree, or a simple HTTP request might be the right answer rarely comes up early enough.

This costs money, adds latency, introduces non-determinism, and frequently produces worse results than the alternative.

The Stack Overflow Developer Survey 2025 — 49,000 respondents — captures the collective tension: 84% of developers use or plan to use AI tools, but 46% don't trust the accuracy. The main frustration of 66% of devs: "AI solutions that are almost right, but not exactly." And 45% say debugging AI-generated code is more work than writing it themselves.

Simon Willison's working definition is useful here: LLMs are "an overconfident pair programming assistant that is incredibly fast at researching things, can produce relevant examples at any moment, and performs tedious tasks without complaining." The operative word is *overconfident*. The tool is not the problem. Reaching for it when it is the wrong tool is.


---

## The fracture

The most important distinction in AI tooling is not between models or frameworks. It is between deterministic and probabilistic systems.

A traditional automation workflow — RPA, n8n, Zapier — is deterministic. Same input produces the same output every time, with a complete audit trail. An LLM is probabilistic. The same prompt can produce different outputs across runs. This difference is irrelevant in a demo. In production, it determines your entire reliability posture.

A September 2025 study (Průcha et al.) compared **UiPath** RPA directly against Anthropic's Computer Use Agent across three enterprise workflows. RPA won on execution speed and reliability. The LLM agent reduced development time significantly and adapted better to dynamic interfaces — but it also exhibited what the researchers called "occasional unpredictability": opening unnecessary applications, declaring success prematurely. Their conclusion: current implementations are not production-ready, but show clear value for rapid prototyping.

The cost asymmetry is brutal at scale. RPA has near-zero marginal cost per execution once deployed. LLMs charge per token: **GPT-5.2** costs $1.75/$14 per million tokens (input/output); **Claude Sonnet 4.5**, $3/$15; **DeepSeek V3.2**, $0.14/$0.28. A simple health check via LLM every five minutes costs orders of magnitude more than a direct HTTP request. On latency, RPA operates in milliseconds for API integrations; LLMs operate in hundreds of milliseconds to seconds, with reasoning models reaching 10–30 seconds.

Martin Fowler articulated this moment as clearly as anyone: "We're not just moving up levels of abstraction — we're moving sideways into non-determinism at the same time." His metaphor for working with AI: treat each delivery like "a pull request from a doubtful collaborator who is very productive in terms of lines of code, but who you cannot trust."

The first question when evaluating any AI integration: **do I actually need probabilistic outputs, or am I just reaching for what's familiar?**

---

## Where each approach wins

### Where LLMs shine

Language models have genuine advantages in specific domains. Outside these domains, you are paying a premium for worse results.

**Unstructured text processing.** Sentiment analysis, entity extraction, classification, summarization — any task where the input is variable, ambiguous natural language. This is LLMs' native territory. No alternative matches them here at reasonable cost.

**Few-shot generalization.** LLMs can learn a new task from a handful of examples in the prompt, without retraining. A study by INWT Statistics found that a fine-tuned LLM matched **XGBoost**'s accuracy with 600 training observations versus the 6,000 **XGBoost** needed — and outperformed it by 1.5 percentage points of MAPE when unstructured descriptions were included alongside structured data. When labeled data is scarce, this matters significantly.

**Code generation and debugging.** The impact here has been measurable and real. Willison called coding agents "the most impactful event of 2025." The caveat: useful for producing code, not for owning its correctness. Verification remains human work.

**Cross-document synthesis.** Combining information across multiple sources and formats — a task that previously required expensive human analysts for large volumes.

**Natural language interfaces to systems.** Users describe goals in plain language; the LLM translates to API calls, SQL queries, or structured commands. This unlocks automation for non-technical users.

### Where classic ML still dominates

For structured tabular data, the performance gap is not marginal — it is dramatic.

A 2025 benchmark on COVID-19 mortality prediction (Nature Scientific Reports) produced numbers that should be in every engineering team's decision vocabulary: **XGBoost achieved F1 of 0.87. GPT-4 zero-shot achieved F1 of 0.43.** Less than half. Even a fine-tuned **Mistral-7b** reached only 0.74. A meta-study across 68 OpenML datasets confirmed the pattern: gradient boosted trees consistently outperform foundation models on tabular data.

The structural reasons are not incidental. Decision trees process each feature numerically, branching directly on thresholds. LLMs serialize everything into text tokens, losing quantitative relationships — "80,000" and "30,000" become arbitrary token sequences. Trees handle missing values natively. Trees process each row independently without information bleeding between rows.

For fraud detection, credit scoring, recommendation systems, anomaly detection, and time series forecasting: use **XGBoost**, **LightGBM**, or **CatBoost**. You will get better accuracy, millisecond latency, and **SHAP** explainability for compliance — at a fraction of the cost.

### Rule engines for non-negotiable cases

When a system requires formal guarantees, complete auditability, and deterministic outputs, neither LLMs nor ML models are appropriate. This is not a limitation of current technology — it is a structural property of probabilistic systems.

The clearest case I've built: a LGPD-compliant document processing pipeline for a medical office in Brazil. Under Brazil's Lei Geral de Proteção de Dados, all health data is classified as "dados pessoais sensíveis" — the strictest protection tier. Legitimate interest as a legal basis is categorically prohibited for sensitive data processing, eliminating the most flexible legal basis available under GDPR. When a breach is detected, the controller has **3 business days** to notify both the regulatory authority (ANPD) and every affected patient. Not 60 days like HIPAA. Three business days — twenty times faster. The notification requires 12 mandatory fields, must be filed by the publicly registered DPO, and every incident — whether formally notified or not — goes into a mandatory 5-year log.

That entire compliance layer runs on a rule engine. Breach countdown timers that start from the moment the controller gains knowledge of the incident. DSAR response queues enforcing the 15-calendar-day window mandated by Article 19. Deletion decision trees where CFM medical record retention obligations legally override patient deletion requests under Article 18 — not a judgment call, a statutory collision with a deterministic resolution. Pre-populated ANPD notification templates with all 12 required fields.

> One hallucination in that layer is a potential R$50 million fine per infraction.

Meta found out the hard way: the ANPD hit them with R$50,000 per day after finding they had used a legal basis that LGPD categorically prohibits for health data when training their AI models. The ANPD listed AI as its fourth enforcement priority for 2026–2027, with 20 planned inspections. The Ministry of Health was sanctioned twice in November 2024 alone — once for failing to timely notify under Article 48, once for inadequate security measures across systems containing health data for millions of Brazilians.

The EU AI Act makes the same structural point from a different angle: a Berlin insurer was fined €2 million for deploying a risk assessment model that couldn't explain its outputs. The Act carries penalties up to €35 million or 7% of global revenue. In regulated domains, the rule engine is not the legacy option. It is the only compliant architecture for the deterministic parts of the system.

### Enter the hybrids

The most productive architectural pattern in 2025–2026 is combining LLMs with deterministic systems. Neither alone is sufficient for most complex production problems.

The medical office pipeline is the clearest illustration. The document extraction side — parsing unstructured clinical notes, lab results, prescriptions in variable formats, extracting structured entities from ambiguous medical language — is a genuine language problem. An LLM earns its place here. No rule engine handles free-text clinical records at scale without prohibitive manual configuration.

The compliance side is entirely deterministic. The LLM extracts structure from language; the rule engine reasons over the extracted structure with formal guarantees. One system, two fundamentally different tools, each in its correct domain. The architecture isn't a compromise — it's the point.

Three other patterns that work in production:

**LLM as orchestrator.** The LLM decides what to do; deterministic tools execute. **Claude Code** works exactly this way — the model reasons about code changes, then runs deterministic compilation and test cycles to verify. The LLM provides judgment; the tools provide reliability.

**ML + LLM.** **XGBoost** handles structured predictive features; the LLM extracts text features. Financial market analysis: the model processes price and volume data, the LLM processes news sentiment. Neither alone covers the full signal space.

**LLM generates rules.** LLMs translate unstructured policy documents — building codes, insurance policies, compliance frameworks — into explicit rules that are then applied deterministically in production. The LLM does the translation once; the rule engine runs at scale. Nature published in November 2025 that when AAAI members were asked whether neural networks alone could achieve human-level AI, the vast majority said no — most pointed to integration with symbolic AI as the necessary path.

---

## Agents: the decade, not the year

There is a version of this post that would end with the hybrid section and call it done. But the loudest current claim in AI — that autonomous agents are arriving in production — deserves a direct response, because the gap between the discourse and the data is wide.

In October 2025, Andrej Karpathy made the clearest correction: "It's the decade of agents, not the year of agents." His reasoning is worth sitting with. For a five-step task where each step has 90% reliability, the total success rate is approximately 32%. Going from 90% to 99.9% reliability — the "march of the nines" — requires exponentially greater effort at each step. The demo looks impressive. The production reliability math does not.

The data confirms this sobriety. The Cleanlab 2025 report on agents in production surveyed 1,837 organizations. Of those, **95 had live agents in production**. Deloitte found that while 30% of organizations are exploring agentic AI, only 11% are using agents in production. Forrester predicted that 75% of companies attempting to build aspirational agentic architectures on their own will fail.

Where agents already work, the results are concrete and instructive. Klarna's AI assistant handled 2.3 million conversations in its first month, cutting resolution time from ~11 minutes to under 2 minutes — equivalent to ~700 FTEs. The pattern is consistent: agents with **limited scope**, **well-defined tools**, **human-in-the-loop**, and **domains where verification is easy**. Klarna does customer service. **Claude Code** does software development. Both are domains where the feedback loop is fast and failure modes are contained.

General-purpose autonomous agents operating in domains where errors have real-world consequences — healthcare, legal, financial — are not there yet. For those domains, the hybrid architecture described above is the current production ceiling. It is a high ceiling. It is not the same as autonomous agency.

---

## The decision flowchart

Before writing any code, answer these questions in order:

1. **Can I write explicit rules for this problem?** → Use a rule engine or RPA. Faster, cheaper, deterministic, auditable.
2. **Is the data primarily structured and tabular?** → Use ML classic. **XGBoost** will outperform an LLM and cost a fraction.
3. **Do I need deterministic, auditable outputs, but the input is unstructured?** → LLM + rule engine hybrid. LLM for extraction, rule engine for reasoning.
4. **Is this primarily a language understanding or generation task?** → Use an LLM.
5. **None of the above?** → Reconsider whether you need AI at all.

Most problems that feel like they need AI fall under question 1 or 2.

---

## What this changes

The framing that dominates AI discourse right now is capability — what can this model do? The more useful engineering question is fitness — is this the right approach for this specific problem, at this cost, with these reliability requirements?

Gradient boosted trees beating **GPT-4** by 44 percentage points on a classification task is not an argument against AI. It is an argument for knowing your problem. A rule engine correctly computing a deterministic compliance deadline that an LLM gets wrong is not a failure of AI. When that failure happens in a regulated industry, it is an enforcement action.

The ThoughtWorks Technology Radar gave its highest "Adopt" rating to exactly one AI technology in 2025: GenAI for understanding legacy codebases. Not for generating new code. Not for autonomous agents. For reading and making sense of complex existing systems — a task that requires judgment, context, and the ability to hold contradictory constraints simultaneously. The Radar also identified the central practice shift of the year: from "prompt engineering" to **context engineering** — not just writing prompts, but systematically managing what the model can see: which files, which tools, which constraints, which history.

The profession is being refactored. Karpathy described it as "a magnitude 9 earthquake" — writing code becoming a smaller fraction of the work, while decomposition, specification, verification, and architectural judgment become the real differentiators. Labor market data confirms the shift is already asymmetric: employment for software developers aged 22–25 fell nearly 20% since its 2022 peak, while for professionals aged 35–49 it increased 9%. The work that requires experience navigating complexity, ambiguity, and trade-offs — knowing what to build, how to verify it, and when each tool is right — is exactly the work that becomes more valuable as the tools themselves become more capable.

Kent Beck coined the relevant distinction: "augmented coding" versus "vibe coding." Vibe coding treats AI as a magic solution generator. Augmented coding maintains engineering standards while leveraging AI capabilities. The difference shows up most sharply in how you handle non-determinism. Beck has documented agents deleting tests to make them pass — declaring success while silently breaking the guarantee. TDD is not optional in this environment. It is the counterweight.

Use the right tool. Verify the result. Ship the thing.
