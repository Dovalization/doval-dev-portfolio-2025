---
title: "Código é comunicação"
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
excerpt: "Pesquisadores puseram o mesmo código confuso na frente de humanos conectados a sensores de EEG e de modelos de linguagem medindo perplexidade. Os picos de confusão apareceram no mesmo lugar. A máquina se confunde com o mesmo código que confunde você — e isso diz algo importante sobre o que o código sempre foi."
lang: pt
---

Sabe o que pesquisadores descobriram quando puseram o mesmo trecho de código confuso na frente de humanos conectados a sensores de EEG e de modelos de linguagem medindo perplexidade? Os picos de confusão apareceram no mesmo lugar, na mesma amplitude. Não foi um achado isolado — trabalhos anteriores já mostravam que código de maior perplexidade reduz a precisão humana (Casalnuovo et al., 2020), e que a perplexidade de um token prevê linearmente quanto tempo levamos para lê-lo (Goodkind & Bicknell, 2018).

A máquina se confunde com o mesmo código que confunde você.

Isso não é uma peculiaridade da arquitetura do modelo. É consequência de uma afirmação muito mais antiga sobre o que o código é.

---

## Código como ato comunicativo

> "Vamos mudar nossa atitude tradicional em relação à construção de programas: em vez de imaginar que nossa tarefa principal é instruir um computador sobre o que fazer, vamos nos concentrar em explicar a seres humanos o que queremos que um computador faça."
> Donald Knuth, 1984.

Abelson e Sussman chegaram à mesma conclusão no mesmo ano: "Programas devem ser escritos para que pessoas os leiam, e apenas incidentalmente para que máquinas os executem."

Citamos essas frases há quarenta anos. Mas a implicação mais profunda ficou em segundo plano.

Peter Naur foi mais direto. Em "Programming as Theory Building" (1985), disse que o programa não é o artefato. O programa é a *teoria* — o entendimento compartilhado que existe nas mentes das pessoas que o construíram. O código-fonte é uma *representação com perdas* dessa teoria. Quando a equipe se dispersa, a teoria morre. Reconstruí-la a partir da documentação é, nas palavras de Naur, **estritamente impossível.**

Se Naur estiver correto, então cada prática de código limpo é uma estratégia para minimizar essa perda — para manter a teoria do sistema transmissível ao longo do tempo e das equipes. Nomear bem é como você condensa os conceitos da teoria em identificadores, e as revisões de código são como você verifica se a teoria de uma mente foi transferida com sucesso para outra.

Robert "Uncle Bob" Martin quantificou a assimetria: "A proporção entre o tempo gasto lendo e escrevendo é bem maior que 10 para 1." Você escreve uma vez, mas outros leem muitas vezes. Isso não é metáfora. É a realidade estrutural da prática.

Essa tem sido a premissa implícita da engenharia de software séria por quarenta anos. O que é novo é que agora temos prova empírica de uma fonte inesperada.

---

## O que os LLMs revelam

Modelos de linguagem de grande escala são treinados em código escrito por humanos. Eles aprendem prevendo o próximo token a partir dos padrões estatísticos de milhões de codebases. Ao fazer isso, internalizam os mesmos padrões que tornam o código legível para programadores. Isso os torna um instrumento inesperado para testar a tese comunicativa — se legibilidade humana e legibilidade para modelos realmente convergem, o desempenho dos LLMs deve se degradar no mesmo código que degrada a compreensão humana.

E os dados apontam para uma resposta: isso acontece.

Nomes de identificadores compõem aproximadamente 70% do código-fonte (Hilton & Hermans, PPIG 2017) — são o ato comunicativo dominante na programação. Wang et al. (2024) testaram o que acontece quando esses nomes são despojados de seu conteúdo semântico. Eles criaram versões de código com nomes de variáveis, métodos e funções anonimizados ou enganosos, depois mediram o desempenho do modelo em tarefas de análise. Em Python, anonimizar os três tipos de nomes derrubou a precisão para 23,73%. Código perfeitamente compreensível com nomes significativos tornou-se quase impossível de entender com nomes sem sentido — para o modelo.

Jain et al. (ICLR 2024) realizaram um experimento complementar: limpar dados de treinamento renomeando variáveis com nomes descritivos, modularizando funções complexas e inserindo comentários de planejamento em linguagem natural. Resultado: melhoria direta na qualidade de geração de código dos LLMs. Tornar o código mais legível melhorou a capacidade dos modelos de trabalhar com ele.

Um estudo de 2025 (arXiv 2508.11958) descobriu que mais de 85% dos code smells nos dados de treinamento se propagam para as saídas dos LLMs — e que limpar os dados de treinamento para legibilidade eliminou a propagação enquanto melhorou o desempenho.

Dois estudos de 2025–2026 levam a convergência ainda mais longe. O EyeLayer (ICPC 2026) incorporou padrões de fixação ocular humana em modelos de sumarização de código e alcançou ganhos de até 13,17% no BLEU-4. O HumanLLM (FSE 2025) aplicou enriquecimento de dados com trajetórias de rastreamento ocular e alcançou +7,16 no CodeBLEU. A atenção humana durante a leitura de código é agora um sinal de treinamento literal — onde programadores olham quando leem código melhora diretamente o que os modelos produzem.

---

## A convergência não é coincidência

O mecanismo por trás disso não é misterioso.

Nomes descritivos se tokenizam em subpalavras significativas. `calculateTotalPrice` se torna `["calculate", "Total", "Price"]` — conteúdo semântico preservado entre fronteiras de palavras. `x7_tmp` se torna `["x", "7", "_", "tmp"]` — ruído. O modelo tem algo com que trabalhar no primeiro caso e quase nada no segundo.

Funções bem decompostas têm fluxo de dados mais claro. Tanto humanos quanto LLMs se degradam diante de código profundamente aninhado e de alta complexidade — humanos por causa dos limites da memória de trabalho e modelos porque otimizam localmente sem considerar o contexto global.

A hipótese da naturalidade (Hindle et al., ICSE 2012) mediu isso quantitativamente: código é ainda mais repetitivo e previsível do que a linguagem natural. As convenções que tornam o código legível — nomenclatura consistente, padrões familiares, estruturas claras — são exatamente o que torna o código **de baixo ruído**. Código de alta qualidade é estatisticamente mais fácil de prever porque é mais convencional.

Aqui fica interessante. LLMs leem esquerda-direita. Nós não — escaneamos, reconhecemos padrões na estrutura, saltamos. Docstrings verbosas e anotações de tipo explícitas ajudam modelos; um leitor experiente pula. As diferenças são reais.

Mas observe o que converge: os sinais que mais importam — nomes significativos, estrutura clara, convenções consistentes — são os mesmos para os dois lados. O que humanos e máquinas encontram legível no código se sobrepõe porque LLMs aprenderam esses padrões de nós.

---

## A implicação

Nada disso muda o que você deveria estar fazendo. A implicação da convergência é que o argumento para escrever código legível ficou mais forte — e os dados para sustentá-lo chegaram de uma direção inesperada.

Já tínhamos o argumento centrado no humano: código legível é mais barato de manter, mais seguro de modificar, mais fácil de revisar. O custo do código está esmagadoramente na leitura e compreensão, não em escrevê-lo.

Agora temos o argumento centrado na IA: as mesmas propriedades que tornam o código legível para humanos o tornam mais legível para cada ferramenta LLM no nosso fluxo de trabalho — autocomplete de código, revisão, refatoração, geração. Quando nosso codebase tem nomes significativos e uma estrutura limpa e organizada, não estamos apenas nos comunicando com o próximo revisor humano. Estamos nos comunicando com cada ferramenta de IA que toca nele.

Isso não é uma nova restrição imposta pelo ferramental de IA. É a confirmação de algo que a boa engenharia de software sempre soube, agora chegando de uma direção que o torna mensurável.

### O que isso significa na prática

Se legibilidade humana e legibilidade para modelos convergem, então nomear deixa de ser questão de preferência. `processData` não comunica quase nada — para o revisor humano nem para o modelo que vai completar o código depois. `normalizeTransactionAmounts` faz trabalho comunicativo real em ambas as direções. É tentador nomear rápido e refatorar depois. Só que a nomenclatura é onde a maior parte do trabalho semântico vive — e o custo de nomear mal se acumula em cada leitura.

A revisão de código ganha um novo eixo: quanto significado está contido nos nomes? Um comentário apontando um nome ambíguo não é preferência subjetiva. É identificar algo que vai prejudicar cada leitor — humano ou máquina — enquanto aquele código existir.

Para quem usa ferramentas de IA, tem mais: o codebase que mantemos é dado de treinamento. Aquele achado dos 85% de code smells opera nas duas direções — código limpo gera sugestões limpas; código ambíguo gera mais do mesmo. Não é razão para entrar em pânico com a dívida técnica. É razão para tratar convenções de nomenclatura como trabalho com efeitos mensuráveis, não só em manutenibilidade, mas na qualidade de tudo que o modelo vai sugerir depois.

Knuth disse que programas são obras literárias destinadas a leitores humanos. O que ele não poderia ter antecipado é que uma nova classe de leitores chegaria para lhe dar razão.

---

## Referências

**Evidência neurofisiológica**

- [Casalnuovo et al. (2020). *Does surprisal predict code comprehension difficulty?* CogSci.](https://cognitivesciencesociety.org/cogsci20/papers/0102/0102.pdf)
- [Goodkind & Bicknell (2018). *Predictive power of word surprisal for reading times is a linear function of language model quality.* CMCL.](https://aclanthology.org/W18-0102/)
- [Anônimo (2026). *How do humans and LLMs process confusing code?* ICPC.](https://arxiv.org/abs/2508.18547)

**Nomenclatura e desempenho de LLMs**

- [Wang et al. (2024). *How does naming affect LLMs on code analysis tasks?*](https://arxiv.org/abs/2307.12488)
- [Jain et al. (2024). *LLM-assisted code cleaning for training accurate code generators.* ICLR.](https://arxiv.org/abs/2311.14904)
- Anônimo (2025). *Clean code, better models.* [arXiv:2508.11958](https://arxiv.org/abs/2508.11958)

**Atenção humana e LLMs**

- [Anônimo (2026). *EyeLayer: human eye-gaze augmentation for code summarization.* ICPC.](https://arxiv.org/abs/2602.22368)
- [Zhang et al. (2025). *Enhancing code LLM training with programmer attention.* FSE.](https://arxiv.org/abs/2503.14936)

**Naturalidade e legibilidade**

- [Hindle et al. (2016). *On the naturalness of software.* CACM.](https://dl.acm.org/doi/10.1145/2902362)
- [Hilton & Hermans (2017). *Naming guidelines for professional programmers.* PPIG.](https://ppig.org/files/2017-PPIG-28th-hilton.pdf)

**Textos clássicos**

- Knuth, D. (1984). Literate programming. *The Computer Journal, 27*(2), 97–111.
- Naur, P. (1985). Programming as theory building. *Microprocessing and Microprogramming, 15*(5), 253–261.
- Martin, R. C. (2008). *Clean Code: A Handbook of Agile Software Craftsmanship.* Prentice Hall.
