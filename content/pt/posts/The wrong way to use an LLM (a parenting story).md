---
title: "O jeito errado de usar um LLM (uma história de pai)"
created_at: 2026-04-16T00:00:00-03:00
updated_at: 2026-04-16T00:00:00-03:00
type: post
status: published
cover_image: "/images/blog/wrong-way-llm-cover.jpg"
tags:
  - engineering
  - automation
  - parenting
  - ai
tier: 2
pillar: Engineering craft meets product
excerpt: "A escola manda notificações por um app proprietário. Pedidos de fraldas, fotos e formulários chegam no mesmo feed que fotos de atividades e recados. Parei de perder esses pedidos fazendo engenharia reversa na API e construindo um pipeline que lê cada mensagem, extrai as ações e joga no Todoist antes das 8h."
lang: pt
---

A maioria dos pipelines que usam LLMs para classificação comete o mesmo erro: pede que o modelo faça coisas demais. Extrair os dados, interpretar a data, decidir se é acionável, formatar a saída. O resultado é um sistema que se comporta de forma diferente a cada execução — mesma entrada, saída sutilmente diferente — e uma lógica de deduplicação que quebra de formas difíceis de rastrear.

O ponto de corte certo é mais preciso do que parece. O LLM extrai. Todo o resto é código.

Construí um exemplo concreto disso enquanto resolvia um problema de pai. A creche do meu filho se comunica por um app mobile proprietário — um feed plano onde pedidos de fraldas e formulários para assinar disputam espaço com fotos de atividades e recados. A gente estava deixando passar muita coisa. Então fiz engenharia reversa na API e construí um pipeline para transformar as mensagens da escola em tarefas no Todoist antes das 8h.

---

## Encontrando a API

O app tem uma interface web. Interfaces web fazem requisições HTTP. Requisições HTTP podem ser inspecionadas.

Abri o Chrome DevTools, entrei no app e observei a aba Network. Em poucos minutos o padrão ficou claro: toda ação disparava um `POST` para `/services/gateway.php` com um corpo JSON no formato `{"class": "...", "method": "...", "parameters": {...}}`. RPC sobre HTTP — sem REST, sem GraphQL, um único endpoint que despacha pelo nome do método.

O login posta as credenciais em um endpoint separado. A resposta inclui um `registerCode` — identificador da escola usado em todas as chamadas seguintes. A partir daí, a API de notificações tem dois passos:

1. `getNotificationContactsV2` — retorna a lista de canais (um por professora ou turma)
2. `getNotificationsV2` — dado um ID de canal, retorna as mensagens

Cada mensagem tem um campo `mimeType`: `text/plain`, `application/pdf` ou `image/*`. A escola manda os três tipos.

---

## Uma descoberta inesperada

Alguns cabeçalhos eram necessários para obter respostas válidas:

```
Content-Type: application/octet-stream
No-Crypt: true
Request-Type: parents
Use-UTF8: true
```

O cabeçalho `No-Crypt: true` foi o mais revelador — e não de um jeito bom.

O app tem um modo de transporte criptografado. Esse cabeçalho o desativa. O servidor aceita a instrução sem questionar e devolve JSON puro. Ou seja: o cliente decide se a criptografia acontece.

Isso é uma falha séria de design. Criptografia de transporte de verdade é aplicada pelo servidor — o cliente não tem voz na decisão. Quando o cliente consegue desativar a criptografia com um cabeçalho, a criptografia é só fachada. Qualquer pessoa na mesma rede que conheça esse cabeçalho — descobrível em minutos pelo DevTools — consegue ler os dados em texto puro sem quebrar nada. Sem nenhuma chave.

Todas as informações de pais e alunos que trafegam pelo app: mensagens, fotos, registros médicos, contatos, autorizações de saída. Acessíveis em texto puro para quem pedir educadamente ao servidor. A escola provavelmente acredita que os dados estão protegidos. Não estão.

Estou reportando isso ao fornecedor. Se você desenvolve apps que lidam com dados de crianças: criptografia aplicada pelo servidor não é opcional.

---

## O que vale a pena ler

Mensagens de texto são simples — o conteúdo está ali. PDFs foram mais interessantes. O planejamento semanal sempre chega em PDF: uma tabela com as atividades de cada dia, com pedidos de ação enterrados nas células. "Enviar uma foto mãe e filho até sexta dia 17/04" aparece na quarta linha de uma tabela de cinco linhas sobre projetos de arte.

Imagens eu ignoro. A escola manda muitas fotos de atividades. Poderia rodar OCR ou modelos de visão, mas a taxa de falsos positivos seria alta e a de verdadeiros positivos, baixa. Não vale a pena.

Para PDFs, uso `pypdf` para extrair o texto de cada página e mandar para o classificador como se fosse uma mensagem de texto. A extração não é perfeita — formatação de tabela se perde — mas o conteúdo é legível o suficiente para o LLM trabalhar.

---

## Deixando o LLM fazer a parte de linguagem

Aqui é onde o design fica interessante, porque há uma armadilha que eu queria evitar.

A abordagem mais óbvia é perguntar ao LLM: "Isso requer alguma ação? Qual é a tarefa? Qual é o prazo?" Retornar tudo como objeto estruturado e mandar para o Todoist.

O problema: LLMs são não-determinísticos. A mesma mensagem na terça pode gerar "prazo: 2026-04-17" e na quinta gerar "prazo: próxima sexta". Com temperatura maior que zero, o modelo inventa interpretações em vez de extrair fatos. Se você rodar o mesmo pipeline duas vezes, obtém duas tarefas com títulos diferentes que parecem coisas diferentes, e a deduplicação falha sem avisar.

Escrevi sobre esse padrão com mais detalhes [em um post anterior](/pt/blog/stop-reaching-for-the-llm): use LLMs para compreensão de linguagem e código determinístico para raciocínio. A regra é simples: o LLM extrai, não decide.

O schema que peço ao LLM retornar tem exatamente três campos:

```json
{
  "is_actionable": true,
  "task_description": "Enviar foto mãe e filho",
  "due_description": "sexta dia 17/04"
}
```

Repare no que falta: `due_date`. Não peço ao LLM para interpretar uma data. Peço que copie a frase exata da mensagem. A interpretação da data acontece no código.

```python
def _parse_due_date(description: str, message_date: date, today: date) -> date | None:
    # Passo 1: DD/MM ou DD/MM/YYYY explícito via regex
    explicit = re.search(r"\b(\d{1,2})/(\d{1,2})(?:/(\d{4}))?\b", description)
    if explicit:
        day, month, year_str = explicit.groups()
        # ...

    # Passo 2: expressões relativas via dateparser
    result = dateparser.parse(description, languages=["pt"], settings={
        "RELATIVE_BASE": datetime.combine(message_date, datetime.min.time()),
        "PREFER_DATES_FROM": "future",
    })
```

Dois detalhes importantes. Primeiro, a abordagem em dois passos: padrões `DD/MM` explícitos primeiro, depois `dateparser` para expressões relativas como "amanhã" ou "próxima semana". O regex resolve o caso mais comum com mais velocidade e precisão. Segundo, `RELATIVE_BASE` usa a data de envio da própria mensagem — não a data de hoje. Se uma mensagem de 6 de abril diz "trazer suprimentos amanhã", "amanhã" deve ser 7 de abril, independente de quando o pipeline rodar.

---

## Deduplicação

A primeira execução ao vivo gerou uma tarefa duplicada. O PDF semanal continha "Enviar foto mãe e filho até sexta dia 17/04" e uma mensagem de texto dois dias depois repetia o mesmo pedido com palavras ligeiramente diferentes. Duas notificações, o mesmo pedido. O LLM identificou as duas como acionáveis e gerou títulos de tarefa levemente distintos.

A lógica de deduplicação tem duas camadas.

1. **Correspondência exata por ID de notificação.** Toda tarefa criada pelo pipeline carrega um token `notif_id:12345678` na descrição. A cada execução, buscamos todas as tarefas escolares abertas, extraímos esses tokens e pulamos qualquer notificação cujo ID já está presente. Resolve o caso em que o pipeline reprocessa uma mensagem que já foi tratada.
2. **Correspondência fuzzy de título, limitada por tempo.** No caso PDF-mais-acompanhamento, as duas notificações têm IDs diferentes, então a primeira camada não resolve. Usamos `difflib.SequenceMatcher` para comparar o título da nova tarefa com as tarefas abertas. Se a similaridade passar de 75%, pulamos.

O detalhe crucial: comparamos apenas com tarefas cuja notificação tem data dentro de sete dias da notificação atual. Isso evita que "Trazer fraldas" na semana um e "Trazer fraldas" na semana três sejam tratadas como duplicatas. Mesmas palavras, pedido completamente diferente. A janela de tempo separa "acompanhamento do mesmo pedido" de "pedido recorrente de suprimentos".

```python
def _is_follow_up_duplicate(title, notif_date, index):
    window = timedelta(days=7)
    for existing_title, existing_date in index:
        if existing_date and abs(notif_date - existing_date) > window:
            continue
        ratio = SequenceMatcher(None, title.lower(), existing_title.lower()).ratio()
        if ratio >= 0.75:
            return existing_title
    return None
```

---

## O bug do dry-run

O pipeline tem um flag `--dry-run`: classifica as mensagens e mostra a saída, mas não cria tarefas no Todoist. Usei para validar o que o LLM estava vendo antes de rodar de verdade.

O primeiro dry-run pareceu correto — duas mensagens encontradas, uma acionável, data certa. Rodei ao vivo. Zero mensagens. Rodei de novo. Zero de novo.

O problema estava no watermark. O watermarking é o mecanismo que evita reprocessamento: para cada canal de notificação, persistimos o ID mais alto de mensagem já visto. Na próxima execução, qualquer mensagem com ID igual ou menor é ignorada.

O flag `--dry-run` só suprimia a criação de tarefas. A atualização do watermark acontecia na camada de busca, que não sabia que era um dry-run. Então o dry-run buscava as mensagens, avançava o watermark até o ID mais recente e salvava em disco. A execução ao vivo seguinte carregava esse watermark, não encontrava nada novo e encerrava na hora. O dry-run tinha consumido as mensagens sem fazer nada com elas.

A correção foi uma linha:

```python
notifications = fetch_new_notifications(
    client,
    ignore_watermark=fetch_all or dry_run  # dry-run não deve avançar o watermark
)
```

Dry-run não pode ter efeito colateral. É fácil de violar quando o efeito colateral fica numa camada que o flag não alcança.

---

## Como fica na prática

O pipeline roda às 7h via launchd no macOS. Quando a gente está tomando café da manhã, qualquer pedido novo da escola já está no Todoist com a data certa.

Saída de uma execução típica:

```
Found 2 new message(s) from school
Classifying with LLM...

Actionable requests (1 found):
  [Vicente] Trazer fraldas (due: 2026-04-17)
    Boa tarde! Estamos precisando de mais fraldas...

Created 1 Todoist task
```

A outra mensagem — uma foto do Vicente fazendo algo com tinta — gerou `is_actionable: false` e foi ignorada.

---

## O que está em jogo de verdade

O interessante nesse projeto não é o scraping. Fazer engenharia reversa em uma API RPC pelo DevTools é coisa de meia hora. O que importa é o design híbrido: onde a responsabilidade do LLM termina e a do código começa.

O LLM lê a mensagem e entende que "enviar foto mãe e filho até sexta" é um prazo. Entende que "trazer fraldas" é um pedido para os pais, não um aviso geral. Entende que uma foto do Vicente pintando não precisa de nenhuma ação. Isso é compreensão de linguagem — onde o LLM realmente brilha.

O LLM não decide quais datas estão no futuro. Não decide se duas tarefas são equivalentes. Não decide se o watermark deve avançar. Isso é raciocínio sobre dados estruturados — território do código. Mais rápido, sem custo por token, e com a mesma resposta toda vez.

Divida o trabalho nessa fronteira e você tem um sistema flexível e confiável ao mesmo tempo. O LLM cuida do que levaria páginas de regex para aproximar. O código cuida do que páginas de regex resolveriam certinho.

Não perdemos mais nenhum pedido da escola.
