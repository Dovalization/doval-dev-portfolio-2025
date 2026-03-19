---
title: "Comece Aqui"
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
excerpt: "O que é este blog, como ele está organizado, como foi construído e por onde começar dependendo do que você está procurando."
lang: pt
---

Este blog existe na interseção entre engenharia de software, design thinking e IA. A perspectiva é de um profissional — não acadêmica, não um feed de polêmicas. É um lugar onde penso em público sobre problemas que não têm respostas simples.
O leitor imaginado é quem constrói software e se importa em entender se funciona e por quê. Isso inclui engenheiros, designers, gerentes de produto e a pessoa rara que é genuinamente os três. A maioria dos blogs técnicos escolhe um. Este não — a abordagem interdisciplinar é o ponto.

---

## Duas trilhas

O blog funciona em duas trilhas paralelas que compartilham substrato intelectual mas são estruturadas de formas diferentes.

**Ensaios** são orientados por argumento. Cada um leva uma afirmação a sério, traz evidências e chega a uma conclusão que pode estar errada. O formato varia de análises curtas (400–800 palavras, um achado) até trabalho original rigoroso com referências acadêmicas e metodologia reproduzível (1.500–3.000 palavras). Os requisitos são: um ângulo original, evidência com a qual o autor de fato se engajou, e um achado — não apenas uma opinião.

**Devlogs** são orientados por processo. Por ora existe apenas uma série de devlogs: o Interpretant, um projeto de pesquisa que rastreia a deriva semântica de 30 conceitos ao longo de 200 anos de texto usando word embeddings temporais. Cada entrada é uma narrativa técnica — o que funcionou, o que quebrou, o que os dados mostraram, o que mudou na metodologia. Código, estatísticas de corpus, visualizações, modos de falha.

As duas trilhas se interligam deliberadamente. Os ensaios articulam o enquadramento conceitual enquanto os devlogs mostram a maquinaria empírica por trás. Com o tempo, a série de devlogs vai gerar dados suficientes para um ensaio Tier 1 de pesquisa genuína — os devlogs serão o registro metodológico.

---

## Cinco pilares

O conteúdo está organizado em cinco pilares. Um pilar não é apenas uma tag — é um argumento sustentado, uma lente que vários posts compartilham. Pense nele como uma série que tem um ponto de vista, não uma categoria temática.

**IA em produção** — Para que a IA realmente serve em sistemas de software, para que não serve, o que os dados dizem versus o que o discurso diz. Sem hype, sem catastrofismo. A pergunta é sempre: qual é a ferramenta certa para este problema específico?

**Interface como comunicação** — Toda interface está fazendo um argumento sobre o que o usuário está fazendo e o que o software considera importante. Decisões de design são atos de comunicação, não apenas escolhas estéticas. Este pilar trata interfaces como algo para ler, não apenas usar.

**Pesquisa aplicada à prática** — Papers acadêmicos raramente se traduzem diretamente em decisões de engenharia. Este pilar faz essa tradução: ler o paper, rodar os números, encontrar o aprendizado prático — replicação tentada, código reproduzível, um achado metodológico que vai contra a interpretação óbvia.

**Engenharia e produto** — Decisões arquiteturais têm custos humanos. Escolhas de abstração comunicam prioridades organizacionais. Este pilar trata dos momentos em que o técnico e o produto são a mesma decisão, e o que acontece quando são tratados separadamente.

**Linguagem e significado** — Palavras viajam entre disciplinas carregando significados diferentes. "Agente" significa algo distinto para um filósofo, um sociólogo e um pesquisador de ML — e essas diferenças importam. Este pilar mapeia esse território: semântica, semiótica, sintaxe e como conceitos se transformam ao circular entre campos.

---

## Três tiers

Dentro da trilha de ensaios, os posts são classificados por profundidade e escopo.

**Tier 1** é análise original: replicação tentada de pesquisas, referências acadêmicas, metodologia reproduzível, um achado que exigiu trabalho original para produzir. São os que levam mais tempo e saem com menor frequência.

**Tier 2** é um único achado: uma afirmação, um conjunto de dados, uma conclusão. Curto (400–800 palavras), alta densidade de informação, sem rodeios. O formato é: afirmação → dados → metodologia → achado. Deve ser reproduzível.

**Tier 3** é um detalhamento técnico ou insight de design: profundidade de profissional em uma decisão, padrão ou tradeoff específico. Código ou dados reais quando relevante. 800–1.500 palavras.

Devlogs existem fora do sistema de tiers. São um formato diferente com objetivos diferentes.

---

## Por onde começar

Dependendo do que você está procurando:

**Se você constrói sistemas que usam IA** — comece com [Pare de Recorrer ao LLM](/pt/blog/stop-reaching-for-the-llm). É um framework de decisão para quando usar um LLM versus um motor de regras, ML clássico, ou nada. XGBoost, GPT-4 e um fluxograma concreto.

**Se você acompanha pesquisas sobre IA e mercado de trabalho** — leia [Como a Anthropic Mede a Exposição da IA](/pt/blog/how-anthropic-measures-ai-exposure). O texto documenta o que o paper da Anthropic realmente mediu, o que é publicamente reproduzível, onde a cadeia de evidências se rompe, e o que a lacuna de replicação revela sobre infraestrutura de medição.

**Se você se interessa por linguagem e significado** — comece com o [Interpretant Devlog 01](/pt/blog/interpretant-devlog-01). Explica o projeto de pesquisa, o corpus (240 livros, 27 milhões de palavras, 200 anos) e a metodologia para rastrear deriva semântica ao longo do tempo. Wittgenstein na introdução, TWEC na seção de metodologia.

---

## Como foi construído

O blog rodava anteriormente no Ghost CMS em um subdomínio separado. O Ghost não tem suporte multilíngue, e um blog vivendo em `blog.doval.dev` não contribuía em nada para o portfólio que deveria complementar. Trazer tudo para dentro significou que o blog passaria a viver em `doval.dev/pt/blog/[slug]`, teria roteamento i18n adequado e se tornaria uma vitrine real das habilidades de frontend que aparecem no currículo.

A stack é deliberadamente minimalista: `gray-matter` analisa o frontmatter, `next-mdx-remote/rsc` compila markdown para React server components, um pequeno pipeline de rehype cuida de syntax highlighting, âncoras de cabeçalho e remoção de wrappers de imagem, e Zod valida o frontmatter no momento do parse. Sem banco de dados, sem API de CMS, sem fetching em runtime — os posts são arquivos `.md` commitados junto com o código. Publicar é trocar `status: draft` por `status: published` no frontmatter e fazer um push para o Vercel.

Para edição de conteúdo, o Keystatic oferece uma interface visual em `/keystatic` sem ser um serviço separado. Ele roda junto com a aplicação em modo local, lendo e escrevendo os mesmos arquivos diretamente. O schema em `keystatic.config.ts` espelha a validação do Zod, então a estrutura é garantida tanto na edição quanto na leitura — sem dependência de nuvem, sem sincronização, sem impacto no build.

Em vez de estilizar prosa com um plugin de tipografia, cada elemento markdown mapeia para um componente React explícito — `BlogA` para links, `BlogPre` para blocos de código, e assim por diante. Isso dá controle total sobre a estilização. A exceção é o `BlogImageComponent`, que precisa de `useState` para um lightbox — ele vive em seu próprio arquivo, mantendo todos os outros wrappers como server components. O conteúdo do blog é essencialmente livre de JavaScript, exceto pelo zoom de imagens.

Quando um post está pronto:

1. Escrever no Obsidian vault (rascunhos ficam em `24.01 Blog/`)
2. Copiar para `content/en/posts/` no repositório do portfólio — ou editar diretamente pelo Keystatic
3. Mudar `status: draft` para `status: published`
4. Traduzir para PT-BR e salvar em `content/pt/posts/`
5. Commit e push — o Vercel reconstrói, as duas versões vão ao ar

