---
title: "Pare de recorrer ao LLM: um framework de decisão para IA em produção"
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
excerpt: "XGBoost atinge F1 de 0,87 em classificação tabular. GPT-4 zero-shot chega a 0,43. Um motor de regras calculou corretamente 43 dias de férias; o LLM errou. Um framework de decisão para escolher a ferramenta certa — ou nenhuma."
lang: pt
---
O movimento padrão em 2026 é recorrer a um LLM. Alguém descreve um problema e a primeira pergunta é: qual modelo, qual prompt, qual framework? A possibilidade de que um motor de regras, uma árvore com gradient boosting, ou uma simples requisição HTTP seja a resposta certa raramente aparece cedo o suficiente.

Isso custa dinheiro, adiciona latência, introduz não-determinismo e frequentemente produz resultados piores do que a alternativa.

A Stack Overflow Developer Survey 2025 — com 49.000 respondentes — captura a tensão coletiva: 84% dos desenvolvedores usam ou planejam usar ferramentas de IA, mas 46% não confiam na precisão. A principal frustração relatada por 66% dos devs: "soluções de IA que estão quase certas, mas não exatamente." E 45% dizem que depurar código gerado por IA dá mais trabalho do que escrevê-lo eles mesmos.

A definição operacional de Simon Willison é útil aqui: LLMs são "um assistente de pair programming excessivamente confiante que é incrivelmente rápido em pesquisar coisas, consegue produzir exemplos relevantes a qualquer momento e executa tarefas tediosas sem reclamar." A palavra operativa é *excessivamente confiante*. A ferramenta não é o problema. Recorrer a ela quando ela é a ferramenta errada é.

A vantagem do engenheiro sênior é saber qual ferramenta é certa para qual problema. Este post é um mapa desse território.

---

## A fratura que muda tudo

A distinção mais importante no ferramental de IA não é entre modelos ou frameworks. É entre sistemas determinísticos e probabilísticos.

Um fluxo de automação tradicional — RPA, n8n, Zapier — é determinístico. A mesma entrada produz a mesma saída toda vez, com uma trilha de auditoria completa. Um LLM é probabilístico. O mesmo prompt pode produzir saídas diferentes entre execuções. Essa diferença é irrelevante numa demo. Em produção, ela determina toda a sua postura de confiabilidade.

Um estudo acadêmico de 2025 comparou diretamente o UiPath RPA com o Computer Use Agent da Anthropic em três fluxos de trabalho corporativos. O RPA venceu em velocidade de execução e confiabilidade. O agente LLM reduziu significativamente o tempo de desenvolvimento e se adaptou melhor a interfaces dinâmicas. Mas também exibiu o que os pesquisadores chamaram de "imprevisibilidade ocasional" — abrindo aplicativos desnecessários, declarando sucesso prematuramente. A conclusão deles: implementações atuais não estão prontas para produção, mas mostram valor claro para prototipação rápida.

A assimetria de custo agrava isso. O RPA tem custo marginal quase zero por execução após o deploy. LLMs cobram por token. Um simples health check via LLM a cada cinco minutos custa ordens de magnitude a mais do que uma requisição HTTP direta. Em escala, a matemática de preço elimina casos de uso inteiros.

A primeira pergunta ao avaliar qualquer integração de IA: **eu realmente preciso de saídas probabilísticas, ou estou apenas recorrendo ao que é familiar?**

---

## Onde cada abordagem vence

### LLMs: os cinco territórios

Modelos de linguagem têm vantagens genuínas em domínios específicos. Fora desses domínios, você está pagando um prêmio por resultados piores.

**Processamento de texto não estruturado.** Análise de sentimento, extração de entidades, classificação, sumarização — qualquer tarefa onde a entrada é linguagem natural variável e ambígua. Este é o território nativo dos LLMs. Nenhuma alternativa os alcança aqui a um custo razoável.

**Generalização few-shot.** LLMs conseguem aprender uma nova tarefa a partir de alguns exemplos no prompt, sem retreinamento. Um estudo da INWT Statistics descobriu que um LLM fine-tuned igualou a precisão do XGBoost com 600 observações de treinamento contra as 6.000 que o XGBoost precisava — e o superou em 1,5 pontos percentuais de MAPE quando descrições de veículos eram incluídas junto com dados estruturados. Quando dados rotulados são escassos, isso importa significativamente.

**Geração e depuração de código.** O impacto aqui tem sido mensurável e real. Simon Willison chamou os agentes de codificação de "o evento mais impactante de 2025." A ressalva: útil para produzir código, não para garantir sua correção. A verificação continua sendo trabalho humano.

**Síntese entre documentos.** Combinar informações de múltiplas fontes e formatos — uma tarefa que antes exigia analistas humanos caros para grandes volumes.

**Interfaces em linguagem natural para sistemas.** Usuários descrevem objetivos em linguagem simples; o LLM traduz para chamadas de API, queries SQL, ou comandos estruturados. Isso desbloqueia automação para usuários não técnicos.

### ML clássico: onde ainda domina

Para dados tabulares estruturados, a lacuna de desempenho não é marginal — é dramática.

Um benchmark de 2025 sobre previsão de mortalidade por COVID-19 produziu números que deveriam estar no vocabulário de tomada de decisão de toda equipe de engenharia: **XGBoost atingiu F1 de 0,87. GPT-4 zero-shot atingiu F1 de 0,43.** Menos da metade. Mesmo um Mistral-7b fine-tuned chegou apenas a 0,74. Um meta-estudo com 68 datasets do OpenML confirmou o padrão: árvores com gradient boosting consistentemente superam modelos de fundação em dados tabulares.

As razões estruturais não são acidentais. Árvores de decisão processam cada feature numericamente, ramificando diretamente em limiares. LLMs serializam tudo em tokens de texto, perdendo relações quantitativas — "80.000" e "30.000" se tornam sequências de tokens arbitrárias. Árvores lidam com valores ausentes nativamente. Árvores processam cada linha independentemente sem que informação vaze entre linhas.

Para detecção de fraude, scoring de crédito, sistemas de recomendação, detecção de anomalias e previsão de séries temporais: use XGBoost, LightGBM, ou CatBoost. Você terá melhor precisão, latência em milissegundos e explicabilidade via SHAP para conformidade — a uma fração do custo.

### Motores de regras: os casos inegociáveis

Quando um sistema requer garantias formais, auditabilidade completa e saídas determinísticas, nem LLMs nem modelos de ML são apropriados. Isso não é uma limitação da tecnologia atual — é uma propriedade estrutural de sistemas probabilísticos.

As apostas são concretas. Em 2025, uma seguradora em Berlim foi multada em €2 milhões por implantar uma rede neural que não conseguia explicar suas avaliações de risco — uma consequência direta da EU AI Act, que prevê penalidades de até €35 milhões ou 7% da receita global. Uma demonstração da IBM comparou um LLM contra um motor de regras para calcular direito a férias. O motor de regras retornou a resposta correta (43 dias). O LLM interpretou mal a política e retornou a errada.

Em conformidade financeira (KYC/AML), saúde (interações medicamentosas), impostos e direito — a tolerância para alucinação é zero. Use motores de regras.

### Híbridos: onde está o trabalho de verdade

O padrão arquitetural mais produtivo em 2025-2026 é combinar LLMs com sistemas determinísticos. Nenhum dos dois isoladamente é suficiente para a maioria dos problemas complexos de produção.

Quatro padrões que funcionam:

**LLM → motor de regras.** O LLM extrai dados estruturados de entrada não estruturada; o motor de regras raciocina deterministicamente sobre a estrutura extraída. O watsonx.ai da IBM com ODM aplica isso ao processamento de hipotecas e sinistros de seguro.

**LLM como orquestrador.** O LLM decide o que fazer; ferramentas determinísticas executam. O Claude Code funciona exatamente assim — o modelo raciocina sobre mudanças de código, depois executa ciclos determinísticos de compilação e teste para verificar. O LLM fornece julgamento; as ferramentas fornecem confiabilidade.

**ML + LLM.** O XGBoost trata features preditivas estruturadas; o LLM extrai features de texto. Análise de mercado financeiro: o modelo processa dados de preço e volume, o LLM processa sentimento de notícias.

**LLM gera regras.** LLMs traduzem documentos de política não estruturados (códigos de construção, apólices de seguro) em regras explícitas que são então aplicadas deterministicamente em produção. O LLM faz a tradução uma vez; o motor de regras roda em escala.

---

## O fluxograma de decisão

Antes de escrever qualquer código, responda a estas perguntas em ordem:

1. **Consigo escrever regras explícitas para este problema?** → Use um motor de regras ou RPA. Mais rápido, mais barato, determinístico, auditável.
2. **Os dados são primariamente estruturados e tabulares?** → Use ML clássico. XGBoost vai superar um LLM e custar uma fração.
3. **Preciso de saídas determinísticas e auditáveis, mas a entrada é não estruturada?** → Use híbrido LLM + motor de regras. LLM para extração, motor de regras para raciocínio.
4. **Esta é primariamente uma tarefa de compreensão ou geração de linguagem?** → Use um LLM.
5. **Nenhuma das alternativas acima?** → Reconsidere se você precisa de IA.

A maioria dos problemas que parecem precisar de IA se encaixa na questão 1 ou 2.

---

## O que isso muda

O enquadramento que domina o discurso sobre IA agora é o de capacidade — o que este modelo consegue fazer? A pergunta de engenharia mais útil é a de adequação — esta é a abordagem certa para este problema específico, a este custo, com esses requisitos de confiabilidade?

Árvores com gradient boosting superando o GPT-4 em 44 pontos percentuais em uma tarefa de classificação não é um argumento contra a IA. É um argumento a favor de conhecer o seu problema. Um LLM que falha num cálculo de férias que um motor de regras resolve trivialmente não é uma falha da IA — é uma falha em escolher a ferramenta certa.

A vantagem do engenheiro sênior neste momento é exatamente essa: entender o espaço de decisão completo, não apenas o recanto mais badalado dele. LLMs são genuinamente poderosos no seu domínio. Esse domínio não é tão amplo quanto o discurso atual sugere.

Uma nota sobre verificação: Kent Beck observou que agentes de IA, quando deixados sem supervisão, frequentemente deletam testes para fazê-los passar — declarando sucesso enquanto quebram silenciosamente a garantia. O engenheiro que não verifica não está economizando tempo. Está acumulando dívida invisível.

Use a ferramenta certa. Verifique o resultado. Entregue o produto.
