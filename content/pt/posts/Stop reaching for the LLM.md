---
title: "Pare de recorrer ao LLM: um framework de decisão para IA em produção"
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
excerpt: "O movimento padrão em 2026 é recorrer a um LLM. Esse reflexo está custando dinheiro, latência e confiabilidade. Um framework de decisão fundamentado em um pipeline de saúde conforme a LGPD — e o que as vozes mais lúcidas do setor dizem sobre quando a IA realmente merece seu lugar."
lang: pt
---

O movimento padrão em 2026 é recorrer a um LLM. Alguém descreve um problema e a primeira pergunta é: qual modelo, qual prompt, qual framework? A possibilidade de que um motor de regras, uma árvore com gradient boosting ou uma simples requisição HTTP seja a resposta certa raramente aparece cedo o suficiente.

Isso custa dinheiro, adiciona latência, introduz não-determinismo e frequentemente produz resultados piores do que a alternativa.

A Stack Overflow Developer Survey 2025 — com 49.000 respondentes — captura a tensão coletiva: 84% dos desenvolvedores usam ou planejam usar ferramentas de IA, mas 46% não confiam na precisão. A principal frustração de 66% dos devs: "soluções de IA que estão quase certas, mas não exatamente." E 45% dizem que depurar código gerado por IA dá mais trabalho do que escrevê-lo eles mesmos.

A definição operacional de Simon Willison é útil aqui: LLMs são "um assistente de pair programming excessivamente confiante que é incrivelmente rápido em pesquisar coisas, consegue produzir exemplos relevantes a qualquer momento e executa tarefas tediosas sem reclamar." A palavra operativa é *excessivamente confiante*. A ferramenta não é o problema. Recorrer a ela quando ela é a ferramenta errada é.

A vantagem do engenheiro sênior é saber qual ferramenta é certa para qual problema. Este post é um mapa desse território.

---

## A fratura

A distinção mais importante no ferramental de IA não é entre modelos ou frameworks. É entre sistemas determinísticos e probabilísticos.

Um fluxo de automação tradicional — RPA, n8n, Zapier — é determinístico. A mesma entrada produz a mesma saída toda vez, com trilha de auditoria completa. Um LLM é probabilístico. O mesmo prompt pode produzir saídas diferentes entre execuções. Essa diferença é irrelevante numa demo. Em produção, ela determina toda a sua postura de confiabilidade.

Um estudo de setembro de 2025 (Průcha et al.) comparou diretamente o **UiPath** RPA com o Computer Use Agent da Anthropic em três fluxos de trabalho corporativos. O RPA venceu em velocidade de execução e confiabilidade. O agente LLM reduziu significativamente o tempo de desenvolvimento e se adaptou melhor a interfaces dinâmicas — mas também exibiu o que os pesquisadores chamaram de "imprevisibilidade ocasional": abrindo aplicativos desnecessários, declarando sucesso prematuramente. A conclusão: implementações atuais não estão prontas para produção, mas mostram valor claro para prototipação rápida.

A assimetria de custo é brutal em escala. O RPA tem custo marginal quase zero por execução após o deploy. LLMs cobram por token: **GPT-5.2** custa $1,75/$14 por milhão de tokens (entrada/saída); **Claude Sonnet 4.5**, $3/$15; **DeepSeek V3.2**, $0,14/$0,28. Um simples health check via LLM a cada cinco minutos custa ordens de magnitude a mais do que uma requisição HTTP direta. Em latência, RPA opera em milissegundos para integrações de API; LLMs operam em centenas de milissegundos a segundos, com modelos de raciocínio chegando a 10–30 segundos.

Martin Fowler articulou este momento com mais clareza do que ninguém: "Não estamos apenas subindo níveis de abstração — estamos nos movendo lateralmente para o não-determinismo ao mesmo tempo." Sua metáfora para trabalhar com IA: trate cada entrega como "um pull request de um colaborador duvidoso que é muito produtivo em linhas de código, mas em quem você não pode confiar."

A primeira pergunta ao avaliar qualquer integração de IA: **eu realmente preciso de saídas probabilísticas, ou estou apenas recorrendo ao que é familiar?**

---

## Onde cada abordagem vence

### LLMs: os cinco territórios

Modelos de linguagem têm vantagens genuínas em domínios específicos. Fora desses domínios, você está pagando um prêmio por resultados piores.

**Processamento de texto não estruturado.** Análise de sentimento, extração de entidades, classificação, sumarização — qualquer tarefa onde a entrada é linguagem natural variável e ambígua. Este é o território nativo dos LLMs. Nenhuma alternativa os alcança aqui a um custo razoável.

**Generalização few-shot.** LLMs conseguem aprender uma nova tarefa a partir de alguns exemplos no prompt, sem retreinamento. Um estudo da INWT Statistics mostrou que um LLM fine-tuned igualou a precisão do XGBoost com 600 observações de treinamento contra as 6.000 que o XGBoost precisava — e o superou em 1,5 pontos percentuais de MAPE quando descrições não estruturadas eram incluídas junto com dados estruturados. Quando dados rotulados são escassos, isso importa significativamente.

**Geração e depuração de código.** O impacto aqui tem sido mensurável e real. Willison chamou os agentes de codificação de "o evento mais impactante de 2025." A ressalva: útil para produzir código, não para garantir sua correção. A verificação continua sendo trabalho humano.

**Síntese entre documentos.** Combinar informações de múltiplas fontes e formatos — uma tarefa que antes exigia analistas humanos caros para grandes volumes.

**Interfaces em linguagem natural para sistemas.** Usuários descrevem objetivos em linguagem simples; o LLM traduz para chamadas de API, queries SQL ou comandos estruturados. Isso desbloqueia automação para usuários não técnicos.

### ML clássico: onde ainda domina

Para dados tabulares estruturados, a lacuna de desempenho não é marginal — é dramática.

Um benchmark de 2025 sobre previsão de mortalidade por COVID-19 (Nature Scientific Reports) produziu números que deveriam estar no vocabulário de tomada de decisão de toda equipe de engenharia: ****XGBoost** atingiu F1 de 0,87. **GPT-4** zero-shot atingiu F1 de 0,43.** Menos da metade. Mesmo um Mistral-7b fine-tuned chegou apenas a 0,74. Um meta-estudo com 68 datasets do OpenML confirmou o padrão: árvores com gradient boosting consistentemente superam modelos de fundação em dados tabulares.

As razões estruturais não são acidentais. Árvores de decisão processam cada feature numericamente, ramificando diretamente em limiares. LLMs serializam tudo em tokens de texto, perdendo relações quantitativas — "80.000" e "30.000" se tornam sequências de tokens arbitrárias. Árvores lidam com valores ausentes nativamente. Árvores processam cada linha independentemente sem que informação vaze entre linhas.

Para detecção de fraude, scoring de crédito, sistemas de recomendação, detecção de anomalias e previsão de séries temporais: use XGBoost, LightGBM ou CatBoost. Você terá melhor precisão, latência em milissegundos e explicabilidade via SHAP para conformidade — a uma fração do custo.

### Motores de regras: os casos inegociáveis

Quando um sistema requer garantias formais, auditabilidade completa e saídas determinísticas, nem LLMs nem modelos de ML são a ferramenta certa. Isso não é uma limitação da tecnologia atual — é uma propriedade estrutural de sistemas probabilísticos.

O caso mais claro que já construí: um pipeline de processamento de documentos conforme a LGPD para um consultório médico no Brasil. Sob a Lei Geral de Proteção de Dados, todos os dados de saúde são classificados como "dados pessoais sensíveis" — o nível de proteção mais estrito. O interesse legítimo como base legal é categoricamente proibido para o tratamento de dados sensíveis, eliminando a base legal mais flexível disponível sob o GDPR. Quando uma violação é detectada, o controlador tem **3 dias úteis** para notificar tanto a autoridade reguladora (ANPD) quanto cada titular afetado. Não 60 dias como no HIPAA. Três dias úteis — vinte vezes mais rápido. A notificação exige 12 campos obrigatórios, deve ser protocolada pelo DPO publicamente registrado, e todo incidente — notificado formalmente ou não — vai para um registro obrigatório de 5 anos.

Toda essa camada de conformidade roda em um motor de regras. Contadores regressivos de violação que iniciam no momento em que o controlador toma conhecimento do incidente. Filas de resposta a DSARs que impõem o prazo de 15 dias corridos do Artigo 19. Árvores de decisão para exclusão onde as obrigações de retenção de prontuários do CFM sobrepõem legalmente os pedidos de exclusão dos titulares sob o Artigo 18 — não uma decisão subjetiva, uma colisão estatutária com resolução determinística. Templates pré-preenchidos de notificação à ANPD com todos os 12 campos obrigatórios.

Uma alucinação nessa camada é uma multa potencial de R$50 milhões por infração. A Meta descobriu da pior forma: a ANPD aplicou R$50.000 por dia ao constatar que ela utilizava uma base legal que a LGPD categoricamente proíbe para dados de saúde ao treinar seus modelos de IA. A ANPD listou a IA como sua quarta prioridade de fiscalização para 2026–2027, com 20 inspeções planejadas. O Ministério da Saúde foi sancionado duas vezes só em novembro de 2024 — uma por deixar de notificar tempestivamente sob o Artigo 48, outra por medidas de segurança inadequadas em sistemas contendo dados de saúde de milhões de brasileiros.

A EU AI Act faz o mesmo ponto estrutural por outro ângulo: uma seguradora em Berlim foi multada em €2 milhões por implantar um modelo de avaliação de risco que não conseguia explicar suas saídas. A lei prevê penalidades de até €35 milhões ou 7% da receita global. Em domínios regulados, o motor de regras não é a opção legada. É a única arquitetura conforme para as partes determinísticas do sistema.

### Híbridos: onde está o trabalho de verdade

O padrão arquitetural mais produtivo em 2025–2026 é combinar LLMs com sistemas determinísticos. Nenhum dos dois isoladamente é suficiente para a maioria dos problemas complexos de produção.

O pipeline do consultório médico é a ilustração mais clara. O lado de extração de documentos — interpretar prontuários clínicos não estruturados, resultados de exames, receitas em formatos variáveis, extrair entidades estruturadas de linguagem médica ambígua — é um problema genuinamente linguístico. Um LLM merece seu lugar aqui. Nenhum motor de regras lida com registros clínicos em texto livre em escala sem configuração manual proibitiva.

O lado de conformidade é inteiramente determinístico. O LLM extrai estrutura da linguagem; o motor de regras raciocina sobre a estrutura extraída com garantias formais. Um sistema, duas ferramentas fundamentalmente diferentes, cada uma no seu domínio correto. A arquitetura não é um compromisso — é o ponto central.

Três outros padrões que funcionam em produção:

**LLM como orquestrador.** O LLM decide o que fazer; ferramentas determinísticas executam. O Claude Code funciona exatamente assim — o modelo raciocina sobre mudanças de código, depois executa ciclos determinísticos de compilação e teste para verificar. O LLM fornece julgamento; as ferramentas fornecem confiabilidade.

**ML + LLM.** O XGBoost trata features preditivas estruturadas; o LLM extrai features de texto. Análise de mercado financeiro: o modelo processa dados de preço e volume, o LLM processa sentimento de notícias. Nenhum dos dois cobre sozinho todo o espaço de sinal.

**LLM gera regras.** LLMs traduzem documentos de política não estruturados — códigos de construção, apólices de seguro, frameworks de conformidade — em regras explícitas que são então aplicadas deterministicamente em produção. O LLM faz a tradução uma vez; o motor de regras roda em escala. A Nature publicou em novembro de 2025 que, quando membros da AAAI foram perguntados se redes neurais sozinhas poderiam atingir inteligência de nível humano, a grande maioria disse não — a maioria apontou a integração com IA simbólica como o caminho necessário.

---

## Agentes: a década, não o ano

Há uma versão deste post que terminaria na seção de híbridos e daria o assunto por encerrado. Mas a afirmação mais barulhenta no campo da IA agora — que agentes autônomos estão chegando à produção — merece uma resposta direta, porque a distância entre o discurso e os dados é grande.

Em outubro de 2025, Andrej Karpathy fez a correção mais clara: "É a década dos agentes, não o ano dos agentes." O raciocínio vale ser assimilado. Para uma tarefa de cinco etapas onde cada etapa tem 90% de confiabilidade, a taxa de sucesso total é de aproximadamente 32%. Ir de 90% para 99,9% de confiabilidade — a "marcha dos noves" — exige esforço exponencialmente maior a cada passo. A demo impressiona. A matemática de confiabilidade em produção não.

Os dados confirmam essa sobriedade. O relatório Cleanlab 2025 sobre agentes em produção entrevistou 1.837 organizações. Dessas, **95 tinham agentes em produção**. A Deloitte encontrou que, embora 30% das organizações estejam explorando IA agêntica, apenas 11% usam agentes em produção. A Forrester previu que 75% das empresas que tentarem construir arquiteturas agênticas ambiciosas por conta própria vão falhar.

Onde agentes já funcionam, os resultados são concretos e instrutivos. O assistente de IA da Klarna processou 2,3 milhões de conversas no seu primeiro mês, reduzindo o tempo de resolução de ~11 minutos para menos de 2 — equivalente a ~700 funcionários. O padrão é consistente: agentes com **escopo limitado**, **ferramentas bem definidas**, **humano no loop** e **domínios onde a verificação é fácil**. A Klarna faz atendimento ao cliente. O Claude Code faz desenvolvimento de software. Ambos são domínios onde o ciclo de feedback é rápido e os modos de falha são contidos.

Agentes autônomos de propósito geral operando em domínios onde erros têm consequências reais — saúde, jurídico, financeiro — ainda não chegaram lá. Para esses domínios, a arquitetura híbrida descrita acima é o teto atual de produção. É um teto alto. Não é o mesmo que agência autônoma.

---

## O fluxograma de decisão

Antes de escrever qualquer código, responda a estas perguntas em ordem:

1. **Consigo escrever regras explícitas para este problema?** → Use um motor de regras ou RPA. Mais rápido, mais barato, determinístico, auditável.
2. **Os dados são primariamente estruturados e tabulares?** → Use ML clássico. O XGBoost vai superar um LLM e custar uma fração.
3. **Preciso de saídas determinísticas e auditáveis, mas a entrada é não estruturada?** → Híbrido LLM + motor de regras. LLM para extração, motor de regras para raciocínio.
4. **Esta é primariamente uma tarefa de compreensão ou geração de linguagem?** → Use um LLM.
5. **Nenhuma das alternativas acima?** → Reconsidere se você precisa de IA.

A maioria dos problemas que parecem precisar de IA se encaixa na questão 1 ou 2.

---

## O que isso muda

O enquadramento que domina o discurso sobre IA agora é o de capacidade — o que este modelo consegue fazer? A pergunta de engenharia mais útil é a de adequação — esta é a abordagem certa para este problema específico, a este custo, com esses requisitos de confiabilidade?

Árvores com gradient boosting superando o GPT-4 em 44 pontos percentuais em uma tarefa de classificação não é um argumento contra a IA. É um argumento a favor de conhecer o seu problema. Um motor de regras calculando corretamente um prazo de conformidade determinístico que um LLM erra não é uma falha da IA. Quando essa falha acontece em um setor regulado, é uma autuação.

O ThoughtWorks Technology Radar deu sua classificação mais alta de "Adotar" a exatamente uma tecnologia de IA em 2025: GenAI para entender bases de código legadas. Não para gerar código novo. Não para agentes autônomos. Para ler e dar sentido a sistemas existentes complexos — uma tarefa que exige julgamento, contexto e capacidade de manter restrições contraditórias simultaneamente. O Radar também identificou a principal mudança de prática do ano: de "engenharia de prompt" para **engenharia de contexto** — não apenas escrever prompts, mas gerenciar sistematicamente o que o modelo pode ver: quais arquivos, quais ferramentas, quais restrições, qual histórico.

A profissão está sendo refatorada. Karpathy descreveu como "um terremoto de magnitude 9" — escrever código se tornando uma fração menor do trabalho, enquanto decomposição, especificação, verificação e julgamento arquitetural se tornam os verdadeiros diferenciais. Os dados do mercado de trabalho confirmam que a mudança já é assimétrica: o emprego de desenvolvedores de software entre 22 e 25 anos caiu quase 20% desde o pico em 2022, enquanto para profissionais entre 35 e 49 anos aumentou 9%. O trabalho que exige experiência para navegar complexidade, ambiguidade e trade-offs — saber o que construir, como verificar, quando cada ferramenta é certa — é exatamente o trabalho que se torna mais valioso conforme as ferramentas ficam mais capazes.

Kent Beck cunhou a distinção relevante: "codificação aumentada" versus "vibe coding". Vibe coding trata a IA como um gerador mágico de soluções. Codificação aumentada mantém os padrões de engenharia enquanto aproveita as capacidades da IA. A diferença aparece com mais clareza em como você lida com o não-determinismo. Beck documentou agentes deletando testes para fazê-los "passar" — declarando sucesso enquanto quebram silenciosamente a garantia. TDD não é opcional nesse ambiente. É o contrapeso.

Use a ferramenta certa. Verifique o resultado. Entregue o produto.
