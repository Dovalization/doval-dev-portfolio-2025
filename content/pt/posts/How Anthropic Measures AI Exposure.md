---
title: "Como a Anthropic mede a exposição da IA — e o que acontece quando você tenta replicar"
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
excerpt: "O gráfico da Anthropic sobre o mercado de trabalho mostra exposição teórica à IA acima de 90% para finanças, direito e tecnologia. Tentei reproduzi-lo. Ele se sustenta direcionalmente — mas a replicação exata é estruturalmente impossível, e o motivo revela mais sobre a medição de IA do que o próprio gráfico."
lang: pt
---

Em março de 2026, a Anthropic publicou "Labor market impacts of AI" (Massenkoff & McCrory, 2026). Um gráfico do paper circulou amplamente: um radar mostrando exposição teórica à IA acima de 90% para ocupações em finanças, direito e tecnologia. A reação foi imediata — decisões de produto, planos de contratação e roteiros estratégicos revistos em tempo real.

Li o paper. Depois tentei reproduzir o gráfico. Isto é o que encontramos.

Este artigo documenta o que a Anthropic fez, o que é publicamente reproduzível, e onde a cadeia de evidências se rompe.

---

## O que a figura 2 realmente mostra

A Figura 2 apresenta dois valores para cada um dos 22 grandes grupos ocupacionais SOC:

- **Exposição teórica** (azul): a fração de tarefas em uma ocupação que LLMs poderiam plausavelmente auxiliar, com base em análise de tarefas anterior à adoção
- **Exposição observada** (vermelho): a fração de tarefas nessa ocupação onde Claude está sendo realmente usado, com base nos dados reais de uso da Anthropic

A lacuna entre azul e vermelho é o gráfico que todos compartilharam. É real, mas entender o que ele mede — e o que não mede — exige rastrear cada valor até sua fonte.

![Gráfico radar mostrando exposição teórica vs. observada à IA por grande grupo ocupacional](/images/blog/anthropic-exposure-figure2.png)

---

## O lado teórico: Eloundou et al. (2023)

Os valores azuis se originam em um paper de 2023 de Eloundou, Manning, Mishkin e Rock — "GPTs are GPTs: An early look at the labor market impact potential of large language models." O paper introduziu um framework para pontuar tarefas ocupacionais pelo seu grau de exposição a LLMs.

Seu principal produto é um conjunto de scores β no nível de tarefa, derivados do banco de dados de tarefas ocupacionais do O*NET.

Cada tarefa é classificada como:

- **E0**: sem exposição significativa a LLMs
- **E1**: exposição direta a LLMs (a própria tarefa pode ser auxiliada por um LLM)
- **E2**: exposição mediada por LLMs (requer uma ferramenta com LLM, mas não prompting direto)

Para a Figura 2 da Anthropic, esses são binarizados: qualquer tarefa classificada como E1 ou E2 recebe β = 1; tarefas E0 recebem β = 0. A exposição teórica de uma ocupação é então a média ponderada por emprego dos scores β de suas tarefas.

Os dados estão disponíveis publicamente pelo [repositório GPTs-are-GPTs no GitHub](https://github.com/openai/GPTs-are-GPTs), com agregações no nível de ocupação em occ_level.csv.

---

## O lado observado: o Índice Econômico da Anthropic

Os valores vermelhos vêm do próprio **Índice Econômico da Anthropic**, publicado no [HuggingFace](https://huggingface.co/datasets/Anthropic/EconomicIndex). O arquivo principal é job_exposure.csv, que contém um score de observed_exposure para cada código SOC de 6 dígitos.

Esses scores são derivados dos registros internos de uso do Claude pela Anthropic. A metodologia, descrita em Tamkin & McCrory (2025), envolve:

1. Extrair descrições de tarefas de conversas reais com o Claude
2. Mapear essas tarefas de volta às categorias de tarefas ocupacionais do O*NET
3. Calcular a fração das tarefas de cada ocupação que aparecem no uso do Claude

Esses dados são publicados publicamente no nível de ocupação. O que *não* é publicado é a etapa intermediária entre o uso bruto e os scores no nível de ocupação.

---

## A agregação em dois passos — e a peça ausente

Para ir dos scores no nível de ocupação para os 22 valores de grandes grupos na Figura 2, o paper usa uma agregação ponderada por emprego em dois passos:

1. Média dos scores no nível de tarefa para o nível de ocupação, ponderada por **frações de tempo** — estimativas de quanto do tempo de um trabalhador é gasto em cada tarefa dentro de sua ocupação.
2. Média dos scores no nível de ocupação para o nível de grande grupo, ponderada pelo **emprego total** da pesquisa Occupational Employment and Wage Statistics (OES) do BLS, de maio de 2023.

**Os dados de emprego do BLS são publicamente disponíveis. Os pesos de fração de tempo não são.**

Essas frações de tempo vêm de Tamkin & McCrory (2025), obtidas ao solicitar ao Claude que estimasse horas gastas por tarefa por ocupação. Elas funcionam como pesos internos que ajustam a contribuição de cada tarefa com base em quanto do dia de trabalho ela realmente ocupa — o que é diferente de simplesmente contar tarefas igualmente.

Nem os pesos de fração de tempo nem os valores intermediários no nível de ocupação que os incorporam são publicados no repositório do HuggingFace ou em qualquer material suplementar.

---

## O que conseguimos replicar

Usando os dados publicamente disponíveis — scores β de Eloundou, scores no nível de ocupação do Índice Econômico da Anthropic e contagens de emprego do BLS OES de maio de 2023 — reconstruímos a Figura 2 da forma mais próxima possível.

A validação no nível de ocupação se sustenta bem. A exposição observada para Programadores de Computador (SOC 15-1251) em nossa reprodução é **74,5%**, contra os ~75% reportados no paper.

No nível de grande grupo, divergimos modestamente. Para as ocupações de Computação e Matemática, nossa estimativa teórica é 92,9% contra os 94% do paper, e nossa estimativa observada é 35,4% contra os 33% do paper. Para Suporte Administrativo e de Escritório, nossa estimativa teórica é 87,9% contra os 90% do paper. A lacuna é consistente — aproximadamente 1–2 pontos percentuais — e sistemática entre os grupos. A direção é clara mesmo que os valores exatos difiram.

O código e os dados completos estão disponíveis neste [repositório GitHub](https://github.com/Dovalization/ai-labor-exposure-replication).

---

## Por que a replicação exata é estruturalmente impossível

A divergência de 1–2pp remonta a uma única etapa intermediária privada: os pesos de fração de tempo.

Quando a Anthropic agrega scores no nível de tarefa para o nível de ocupação, ela não pondera as tarefas igualmente. Uma tarefa que ocupa 40% do dia de um trabalhador conta mais do que uma que ocupa 5%. Isso é metodologicamente correto — é uma melhor aproximação da exposição real do que simples contagens de tarefas. Mas sem as estimativas específicas de horas que o Claude gerou para cada par tarefa-ocupação, não conseguimos replicar a ponderação.

Isso não é uma crítica. As estimativas de fração de tempo envolvem saídas de modelos proprietários e escolhas metodológicas internas que a Anthropic não tem obrigação de publicar. O paper é transparente sobre o que faz — a limitação é estrutural, não evasiva.

O resultado é que a Figura 2 é **reproduzível direcionalmente** com dados públicos, mas **não é exatamente replicável**.

---

## O que a literatura mais ampla diz sobre a lacuna

Replicar o gráfico te diz qual é a lacuna. Não te diz o que ela significa. Para isso, as próprias citações do paper — e a pesquisa ao redor delas — são mais instrutivas do que o gráfico em si.

O padrão mais marcante na literatura adjacente é a desconexão micro-macro. Experimentos individuais de produtividade consistentemente mostram ganhos de 14–56% para trabalhadores usando LLMs (Brynjolfsson, Li & Raymond, 2025; Noy & Zhang, 2023; Peng et al., 2023). Mas os dados macroeconômicos contam uma história diferente: registros administrativos cobrindo 25.000 trabalhadores na Dinamarca (Humlum & Vestergaard, 2025), dados populacionais finlandeses (Kauhanen & Rouvinen, 2025) e o Budget Lab de Yale (Gimbel et al., 2025) convergem todos para a mesma conclusão — **efeitos agregados indistinguíveis de zero. As pessoas economizam tempo. Ele desaparece no atrito organizacional antes de chegar a qualquer métrica que importe em escala.**

Acemoglu (NBER w32487, 2024) **estima que apenas 4,6% de todas as tarefas serão economicamente viáveis de automatizar ao longo de dez anos** — uma fração das figuras de exposição teórica da Figura 2. A distância entre "LLMs poderiam auxiliar nessa tarefa" e "automatizar essa tarefa faz sentido econômico" é a parte que as medidas de exposição não capturam.

![Gráfico de barras agrupadas mostrando exposição teórica vs. observada sem distorção de área](/images/blog/anthropic-exposure-bar-chart.png)

![Gráfico lollipop mostrando a lacuna entre exposição teórica e observada, ordenada por tamanho da lacuna](/images/blog/anthropic-exposure-lollipop.png)

O mercado de freelancers pode ser a exceção. A demanda por escrita, tradução e criação de imagens em plataformas gig caiu 20–50% desde 2022 (Demirci, Hannane & Zhu, 2025; Teutloff et al., 2025) — um segmento com baixa fricção, poucas proteções institucionais e substituição direta de tarefas. Se isso é um indicador antecedente para os mercados de trabalho formais ou um caso estruturalmente distinto permanece uma questão em aberto.

---

## O que isso significa para interpretar o gráfico

A lacuna azul-vermelho na Figura 2 é real e a direção é robusta. Mesmo com nossa replicação aproximada, o padrão se mantém: a exposição teórica é alta nas ocupações profissionais; o uso observado é substancialmente menor em todas as categorias.

O que o gráfico não pode nos dizer — e o que nem a Anthropic nem ninguém sabe atualmente — é se essa lacuna representa oportunidade inexplorada, limites inerentes do que a tecnologia consegue fazer na prática, ou algo entre os dois. O paper não pretende responder a isso.

A metodologia é sólida, os dados são cuidadosamente construídos e as conclusões são mesuradas. A lacuna entre o que o paper diz e o que o feed do LinkedIn disse sobre ele é, indiscutivelmente, maior do que a lacuna entre nossa replicação e o original.

O exercício de replicação aponta para algo além da metodologia.

A etapa intermediária privada — pesos de fração de tempo — não é apenas um detalhe técnico. Ela representa exatamente o tipo de infraestrutura de medição que a maioria das organizações não tem: uma forma sistemática de saber como o trabalho realmente se distribui entre tarefas, antes e depois da adoção da IA. É isso que torna a lacuna difícil de fechar. Não por causa de capacidade ou taxa de adoção, mas pela ausência da instrumentação certa para saber o que está acontecendo.

---

## Referências

**Fonte primária**

- [Massenkoff & McCrory (2026). *Labor market impacts of AI: A new measure and early evidence.* Anthropic.](https://www.anthropic.com/research/labor-market-impacts)

**Metodologia de exposição teórica**

- [Eloundou et al. (2023). *GPTs are GPTs.* OpenAI.](https://github.com/openai/GPTs-are-GPTs)
- [Tamkin & McCrory (2025). *Anthropic Economic Index methodology.* HuggingFace.](https://huggingface.co/datasets/Anthropic/EconomicIndex)
- Bureau of Labor Statistics. *Occupational Employment and Wage Statistics (OES), maio de 2023.* U.S. Department of Labor.

**Ganhos individuais de produtividade (14–56%)**

- [Brynjolfsson, Li & Raymond (2025). Generative AI at work. *QJE.*](https://www.nber.org/papers/w31161)
- [Noy & Zhang (2023). Experimental evidence on the productivity effects of generative AI. *Science.*](https://doi.org/10.1126/science.adh2586)
- [Peng et al. (2023). *The impact of AI on developer productivity: Evidence from GitHub Copilot.*](https://arxiv.org/abs/2302.06590)

**Evidências macro / economia ampla**

- [Humlum & Vestergaard (2025). *Large language models, small labor market effects.* NBER WP 33777.](https://www.nber.org/papers/w33777)
- [Kauhanen & Rouvinen (2025). Assessing early labour market effects of generative AI. *Applied Economics Letters.*](https://doi.org/10.1080/13504851.2025.2513973)
- [Gimbel et al. (2025). *Evaluating the impact of AI on the labor market.* The Budget Lab at Yale.](https://budgetlab.yale.edu/research/evaluating-impact-ai-labor-market-current-state-affairs)

**Limites de automação e criação de tarefas**

- Acemoglu (2024). *The simple macroeconomics of AI.* NBER Working Paper 32487.
- [Acemoglu & Restrepo (2019). Automation and new tasks: How technology displaces and reinstates labor. *Journal of Economic Perspectives, 33*(2).](https://www.aeaweb.org/articles?id=10.1257/jep.33.2.3)
- [Autor et al. (2024). New frontiers: The origins and content of new work. *QJE.*](https://www.nber.org/papers/w30389)

**Deslocamento em plataformas gig**

- [Demirci, Hannane & Zhu (2025). Who is AI replacing? *Management Science.*](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4602944)
- [Teutloff et al. (2025). Winners and losers of generative AI. *JEBO.*](https://www.sciencedirect.com/science/article/pii/S0167268124004591)
