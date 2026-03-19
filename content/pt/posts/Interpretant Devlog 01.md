---
title: "Interpretant Devlog 01 — A ideia e o corpus"
created_at: 2026-03-14T00:00:00-03:00
updated_at: 2026-03-14T00:00:00-03:00
type: devlog
status: published
cover_image: "/images/blog/interpretant-devlog-01.jpg"
tags:
  - research
  - nlp
  - language
  - philosophy
tier: 2
pillar: Interpretant
excerpt: "Wittgenstein disse que o significado de uma palavra é seu uso na linguagem. Este projeto leva isso ao pé da letra: 240 livros, 27 milhões de palavras, 200 anos — treinando embeddings de palavras por década para rastrear como 'representação', 'agente', 'rede' e outros 27 termos realmente se moveram pelo registro escrito."
lang: pt
---

> "Se dizemos 'Cada palavra da linguagem designa algo', com isso não dissemos ainda nada; a não ser que tenhamos explicado exatamente que distinção queremos fazer. (Isso poderia significar que distinguimos as palavras da linguagem de palavras 'sem significado', como ocorrem numa composição dadaísta, ou de palavras como 'Ow' na exclamação de dor.) Para uma grande classe de casos de utilização da palavra 'significado' — mesmo que não para todos os casos de sua utilização — ela pode ser assim explicada: o significado de uma palavra é seu uso na linguagem."
>
> — Wittgenstein, *Investigações Filosóficas* §43 (1953)

O significado de uma palavra muda ao longo do tempo. "Rede" em 1950 significava algo para um engenheiro de comunicações — em 1980 significava algo para um sociólogo — em 2015 significava algo para um pesquisador de aprendizado de máquina. Não são a mesma palavra sendo aplicada a coisas diferentes — o próprio conceito derivou, carregando pressupostos diferentes, vizinhos diferentes, implicações diferentes a cada vez.

Venho refletindo sobre essa observação há algum tempo, principalmente porque trabalho na interseção de design e tecnologia, e sou um leitor ávido. Continuo notando como os mesmos termos — representação, agente, modelo, affordance, inteligência — circulam entre disciplinas como se significassem a mesma coisa, quando claramente não significam.

Então comecei a construir o interpretant — uma ferramenta para rastrear a deriva semântica ao longo do registro escrito dos últimos 200 anos. O nome vem de Peirce: o interpretante é o terceiro elemento da relação de signo, o significado que um signo produz numa mente. Não fixo nem arbitrário — contextual, relacional e sempre em movimento.

A ideia é simples em teoria: treinar modelos de word embedding em textos de cada década, alinhar os espaços vetoriais resultantes para que as posições das palavras sejam comparáveis ao longo do tempo. Depois, observar como a vizinhança de uma palavra muda — quais termos se agrupam ao redor dela, quais se afastam, quando um conceito salta de campo.

---

## O corpus

Antes que qualquer modelagem possa acontecer, precisaremos de texto — muito texto.

Fiz uma escolha deliberada cedo: este seria um corpus curado, não raspado. A camada âncora é uma biblioteca selecionada a mão de textos primários abrangendo filosofia, ciências cognitivas, IA, design, teoria da mídia, sociologia e teoria crítica. Ao lado dela, três fontes acadêmicas de grande volume cobrem a literatura científica a partir dos anos 1960: PubMed (30,5 milhões de resumos, 1960–2020), a ACL Anthology (90 mil artigos de NLP, 1965–2020) e arXiv (112 mil artigos, 1991–2020).

O critério de seleção para os livros é: este texto diz respeito diretamente às palavras que me interessam? As 30 palavras de interesse se distribuem em cinco clusters:

- **Filosofia da mente**: consciência, representação, incorporação, intencionalidade, percepção, experiência, compreensão, mente
- **IA / CS**: inteligência, aprendizado, rede, atenção, agente, memória, raciocínio
- **Design**: affordance, interface, feedback, forma, usuário, padrão
- **Artes / cultura**: imagem, simulação, medium, sinal
- **Transversal**: informação, comportamento, modelo, complexidade, símbolo

O corpus é projetado para criar colisões. Hegel e Sutton & Barto estão nos mesmos dados de treinamento porque ambos tratam de como representações se formam e se atualizam — separados por 180 anos e vocabulários completamente diferentes, mas adjacentes no espaço conceitual que estou tentando mapear.

O corpus abrange cada década desde os anos 1820 até os anos 2010 — uma janela de 200 anos, 240 livros, ~27 milhões de palavras no total:

| Década | Livros | Palavras |
|--------|--------|----------|
| 1820s | 3 | 0,6M |
| 1830s | 5 | 0,4M |
| 1840s | 8 | 1,0M |
| 1850s | 5 | 0,5M |
| 1860s | 5 | 0,5M |
| 1870s | 6 | 1,0M |
| 1880s | 8 | 0,8M |
| 1890s | 6 | 1,0M |
| 1900s | 13 | 1,5M |
| 1910s | 13 | 1,1M |
| 1920s | 17 | 1,7M |
| 1930s | 10 | 1,3M |
| 1940s | 14 | 1,6M |
| 1950s | 16 | 1,3M |
| 1960s | 24 | 3,1M |
| 1970s | 20 | 2,0M |
| 1980s | 21 | 2,5M |
| 1990s | 22 | 2,6M |
| 2000s | 12 | 1,4M |
| 2010s | 12 | 1,2M |

Os anos 1820–1950 são somente livros — os corpora científicos não chegam tão longe no passado. Isso é intencional. A camada de livros está fazendo um trabalho diferente nessas décadas: estabelecer o vocabulário filosófico que a literatura científica posterior irá herdar, contestar ou silenciosamente sobrescrever.

---

## O que construir o corpus realmente envolveu

Mais trabalho do que o esperado.

O processo de obtenção foi em camadas: textos de domínio público obtidos automaticamente do Project Gutenberg e do Internet Archive; PDFs de acesso aberto do Monoskop, Marxists.org e sites de autores; e uma longa cauda de PDFs, EPUBs e arquivos DjVu obtidos manualmente, cobrindo a maior parte da filosofia continental, teoria crítica e ciências cognitivas.

A extração foi a parte difícil. O pipeline usa PyMuPDF para arquivos born-digital e Docling — um pipeline de OCR baseado em ML — para PDFs escaneados. Na prática, isso significou lidar com: PDFs com fontes codificadas que parecem extraíveis mas retornam lixo binário; detecção de digitalização baseada em média de caracteres por página; remoção de artefatos de tags de imagem do output do Docling; e correção de quebras de linha com hífen suave em dezenas de livros onde o OCR havia dividido palavras no meio do token.

O pior caso foi um PDF que retornou 82% de caracteres de controle binários devido a uma codificação de fonte customizada — a extração funcional veio de uma versão DjVu do mesmo livro. 188.000 palavras, no fim.

Cada livro tem uma entrada de manifesto com proveniência completa: autor, ano, década, tags de campo, URL de origem e status de copyright. O manifesto também é como o pipeline valida a cobertura — se uma entrada não tem arquivo de texto extraído correspondente, a validação falha.

---

## O pipeline

Cinco etapas, cada uma um comando CLI:

1. `corpus preprocess` — fatia textos por década em arquivos planos, um documento por linha
2. `embed train` — treina um modelo Word2Vec ou FastText por década
3. `twec train` — treina embeddings temporalmente alinhados usando o método compass
4. `drift compute` — distância de cosseno, deslocamento de vizinhança (Jaccard nos 25 vizinhos mais próximos) e distância média entre pares em décadas consecutivas
5. `app` — dashboard Streamlit: gráficos de trajetória, comparações de vizinhos mais próximos, heatmaps de deriva

A etapa de alinhamento é a que carrega o peso metodológico.

O plano original era a rotação de Procrustes ortogonal — mapear o espaço de embedding treinado independentemente em cada década sobre uma referência compartilhada. Funciona, mas tem um problema estrutural para um corpus com esse tipo de assimetria temporal: Procrustes alinha minimizando a distância ao quadrado sobre um vocabulário compartilhado. Para décadas iniciais com apenas alguns livros, esse vocabulário compartilhado com a referência dos anos 2010 é escasso. A rotação é tecnicamente válida, mas as estimativas têm alta variância.

A substituição é o TWEC — Temporal Word Embeddings with a Compass (Di Carlo et al., 2019). Em vez de treinar cada década independentemente e rotacionar depois, o TWEC treina um único modelo compass em todo o texto de todas as décadas concatenado, estabelecendo um sistema de coordenadas universal. Cada modelo de década é então inicializado a partir do compass e treinado com seus vetores de contexto fixados nos valores do compass. O resultado: os modelos de décadas nascem alinhados. Nenhuma rotação post-hoc, porque o frame compartilhado foi incorporado durante o treinamento.

Isso importa mais nas extremidades. O modelo dos anos 1820 tem muito poucas observações, mas sua geometria é restringida pela mesma matriz de contexto que o modelo dos anos 2020. Décadas esparsas terão posições de menor confiança — menos contagens de co-ocorrência, intervalos de confiança efetivos mais amplos na localização de qualquer palavra — mas estão ancoradas no mesmo espaço em vez de rotacionadas para lá retrospectivamente.

---

## O que espero encontrar

Hipótese de trabalho: termos contestados — palavras que circulam entre disciplinas com significados divergentes — mostrarão maior instabilidade distribucional do que termos técnicos específicos de campo. "Representação" deve ter maior variância de vizinhança entre décadas do que "mitocôndria."

O vocabulário de IA/CS não surgiu do nada. "Agente", "aprendizado", "modelo", "rede" têm longas pré-histórias em cibernética, filosofia da mente e sociologia. A análise de deriva deve mostrar o momento em que essas pré-histórias são sobrescritas — a década em que "rede" deixa de ser Castells e passa a ser retropropagação.

Devo ter os primeiros resultados em breve.
