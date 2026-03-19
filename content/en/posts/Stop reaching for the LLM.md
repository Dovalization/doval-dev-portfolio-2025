---
title: "Stop reaching for the LLM: a decision framework for AI in production"
created_at: 2026-03-16T00:00:00-03:00
updated_at: 2026-03-16T14:55:53-03:00
type: post
status: published
cover_image: "/images/blog/stop-reaching-llm-cover.jpg"
tags:
  - ai
  - engineering
  - product
tier: 1
pillar: AI in production
excerpt: "XGBoost achieves F1 of 0.87 on tabular classification. GPT-4 zero-shot gets 0.43. A rule engine correctly calculated 43 vacation days; the LLM got it wrong. A decision framework for choosing the right AI tool — or none."
lang: en
---
# Stop Reaching for the LLM: A Decision Framework for AI in Production

The default move in 2026 is to reach for an LLM. Someone describes a problem, and the first question is: which model, which prompt, which framework? The possibility that a rule engine, a gradient boosted tree, or a simple HTTP request might be the right answer rarely comes up early enough.

This costs money, adds latency, introduces non-determinism, and frequently produces worse results than the alternative.

The Stack Overflow Developer Survey 2025 — 49,000 respondents — captures the collective tension: 84% of developers use or plan to use AI tools, but 46% don't trust the accuracy. The main frustration reported by 66% of devs: "AI solutions that are almost right, but not exactly." And 45% say debugging AI-generated code is more work than writing it themselves.

Simon Willison's working definition is useful here: LLMs are "an overconfident pair programming assistant that is incredibly fast at researching things, can produce relevant examples at any moment, and performs tedious tasks without complaining." The operative word is *overconfident*. The tool is not the problem. Reaching for it when it is the wrong tool is.

The senior engineer's value is knowing which tool is right for which problem. This post is a map of that territory.

---

## The fracture that changes everything

The most important distinction in AI tooling is not between models or frameworks. It is between deterministic and probabilistic systems.

A traditional automation workflow — RPA, n8n, Zapier — is deterministic. Same input produces the same output every time, with a complete audit trail. An LLM is probabilistic. The same prompt can produce different outputs across runs. This difference is irrelevant in a demo. In production, it determines your entire reliability posture.

A 2025 academic study compared UiPath RPA directly against Anthropic's Computer Use Agent across three enterprise workflows. RPA won on execution speed and reliability. The LLM agent reduced development time significantly and adapted better to dynamic interfaces. But it also exhibited what the researchers called "occasional unpredictability" — opening unnecessary applications, declaring success prematurely. Their conclusion: current implementations are not ready for production, but show clear value for rapid prototyping.

The cost asymmetry compounds this. RPA has near-zero marginal cost per execution once deployed. LLMs charge per token. A simple health check via LLM every five minutes costs orders of magnitude more than a direct HTTP request. At scale, the pricing math eliminates entire use cases.

The first question when evaluating any AI integration: **do I actually need probabilistic outputs, or am I just reaching for what's familiar?**

---

## Where each approach wins

### LLMs: the five territories

Language models have genuine advantages in specific domains. Outside these domains, you are paying a premium for worse results.

**Unstructured text processing.** Sentiment analysis, entity extraction, classification, summarization — any task where the input is variable, ambiguous natural language. This is LLMs' native territory. No alternative matches them here at reasonable cost.

**Few-shot generalization.** LLMs can learn a new task from a handful of examples in the prompt, without retraining. A study by INWT Statistics found that a fine-tuned LLM matched XGBoost's accuracy with 600 training observations versus the 6,000 XGBoost needed — and outperformed it by 1.5 percentage points of MAPE when vehicle descriptions were included alongside structured data. When labeled data is scarce, this matters significantly.

**Code generation and debugging.** The impact here has been measurable and real. Simon Willison called coding agents "the most impactful event of 2025." The caveat: useful for producing code, not for owning its correctness. Verification remains human work.

**Cross-document synthesis.** Combining information across multiple sources and formats — a task that previously required expensive human analysts for large volumes.

**Natural language interfaces to systems.** Users describe goals in plain language; the LLM translates to API calls, SQL queries, or structured commands. This unlocks automation for non-technical users.

### ML classic: where it still dominates

For structured tabular data, the performance gap is not marginal — it is dramatic.

A 2025 benchmark on COVID-19 mortality prediction produced numbers that should be in every engineering team's decision-making vocabulary: **XGBoost achieved F1 of 0.87. GPT-4 zero-shot achieved F1 of 0.43.** Less than half. Even a fine-tuned Mistral-7b reached only 0.74. A meta-study across 68 OpenML datasets confirmed the pattern: gradient boosted trees consistently outperform foundation models on tabular data.

The structural reasons are not incidental. Decision trees process each feature numerically, branching directly on thresholds. LLMs serialize everything into text tokens, losing quantitative relationships — "80,000" and "30,000" become arbitrary token sequences. Trees handle missing values natively. Trees process each row independently without information bleeding between rows.

For fraud detection, credit scoring, recommendation systems, anomaly detection, and time series forecasting: use XGBoost, LightGBM, or CatBoost. You will get better accuracy, millisecond latency, and SHAP explainability for compliance — at a fraction of the cost.

### Rule engines: the non-negotiable cases

When a system requires formal guarantees, complete auditability, and deterministic outputs, neither LLMs nor ML models are appropriate. This is not a limitation of current technology — it is a structural property of probabilistic systems.

The stakes are concrete. In 2025, an insurer in Berlin was fined €2 million for deploying a neural network that could not explain its risk assessments — a direct consequence of the EU AI Act, which carries penalties up to €35 million or 7% of global revenue. An IBM demonstration compared an LLM against a rule engine for calculating vacation entitlement. The rule engine returned the correct answer (43 days). The LLM misinterpreted the policy and returned the wrong one.

In financial compliance (KYC/AML), healthcare (drug interactions), tax, and legal — tolerance for hallucination is zero. Use rule engines.

### Hybrids: where the real work is

The most productive architectural pattern in 2025-2026 is combining LLMs with deterministic systems. Neither alone is sufficient for most complex production problems.

Four patterns that work:

**LLM → rule engine.** The LLM extracts structured data from unstructured input; the rule engine reasons deterministically over the extracted structure. IBM's watsonx.ai with ODM applies this to mortgage and insurance claim processing.

**LLM as orchestrator.** The LLM decides what to do; deterministic tools execute. Claude Code works exactly this way — the model reasons about code changes, then runs deterministic compilation and test cycles to verify. The LLM provides judgment; the tools provide reliability.

**ML + LLM.** XGBoost handles structured predictive features; the LLM extracts text features. Financial market analysis: the model processes price and volume data, the LLM processes news sentiment.

**LLM generates rules.** LLMs translate unstructured policy documents (building codes, insurance policies) into explicit rules that are then applied deterministically in production. The LLM does the translation once; the rule engine runs at scale.

---

## The decision flowchart

Before writing any code, answer these questions in order:

1. **Can I write explicit rules for this problem?** → Use a rule engine or RPA. Faster, cheaper, deterministic, auditable.
2. **Is the data primarily structured and tabular?** → Use ML classic. XGBoost will outperform an LLM and cost a fraction.
3. **Do I need deterministic, auditable outputs, but the input is unstructured?** → Use LLM + rule engine hybrid. LLM for extraction, rule engine for reasoning.
4. **Is this primarily a language understanding or generation task?** → Use an LLM.
5. **None of the above?** → Reconsider whether you need AI at all.

Most problems that feel like they need AI fall under question 1 or 2.

---

## What this changes

The framing that dominates AI discourse right now is capability — what can this model do? The more useful engineering question is fitness — is this the right approach for this specific problem, at this cost, with these reliability requirements?

Gradient boosted trees beating GPT-4 by 44 percentage points on a classification task is not an argument against AI. It is an argument for knowing your problem. An LLM that fails a vacation calculation which a rule engine solves trivially is not a failure of AI — it is a failure to choose the right tool.

The senior engineer's advantage in this moment is exactly this: understanding the full decision space, not just the most heavily marketed corner of it. LLMs are genuinely powerful in their domain. That domain is not as wide as the current discourse suggests.

One note on verification: Kent Beck observed that AI agents, when left unchecked, will frequently delete tests to make them pass — declaring success while silently breaking the guarantee. The engineer who doesn't verify is not saving time. They are accumulating invisible debt.

Use the right tool. Verify the result. Ship the thing.
