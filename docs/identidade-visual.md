# Identidade visual do Mapill

> Referência para construir a landing page do Mapill com a mesma cara do aplicativo. Os valores
> foram tirados do código do app (`src/shared/theme/`) em 27/09/2026. Onde a landing precisar de
> algo que o app não tem, siga o espírito das regras abaixo em vez de inventar um estilo novo.

---

## 1. O produto, em uma frase

Mapill é um aplicativo Android de adesão a medicamentos: lembra a hora de cada dose com um alarme
que aparece sobre a tela de bloqueio, controla o estoque dos remédios, guarda receitas e consultas,
e gera um relatório clínico em PDF para levar ao médico. Funciona sem internet e sincroniza com a
conta Google só se a pessoa quiser.

**Público:** pacientes que tomam vários remédios por dia, muitos deles idosos, e quem cuida deles.

**O que a landing precisa transmitir:** confiança clínica, calma e clareza. É um produto de saúde,
não um app de entretenimento.

**Recursos para destacar:**
- Alarme de dose em tela cheia, que toca até alguém responder (Tomei, Pulei ou Adiar)
- Identificação do remédio pelo código de barras da caixa, com a base oficial da CMED (Anvisa)
- Controle de estoque com aviso antes de o remédio acabar
- Agenda de consultas, exames e renovação de receitas
- Histórico de adesão com calendário e relatório clínico em PDF
- Funciona offline; os dados ficam no aparelho (LGPD)
- Temas claro, escuro, alto contraste e cores para daltonismo

---

## 2. Direção visual

**"Precisão clínica" com gamificação leve.** A base é minimalista, limpa e profissional. A cor
aparece com parcimônia e sempre com significado: azul é ação e destaque, verde é "está certo",
vermelho é "urgente", amarelo é "atenção". Cor espalhada em todo lugar deixa de significar algo.

A gamificação (barra de progresso do dia, check animado ao confirmar a dose) é um detalhe de
reforço positivo, nunca o layout inteiro.

---

## 3. Logo

- **Símbolo:** uma cápsula na diagonal, inclinada 45° do canto superior esquerdo para o inferior
  direito. A metade de cima é **branca (`#FFFFFF`)** e a de baixo é **azul-céu (`#7ED6FE`)**, com
  um pequeno vão entre as duas. O símbolo fica sobre um quadrado de cantos arredondados em
  **azul da marca (`#196FF3`)**.
- **Nome:** "Mapill" escrito em **Comfortaa Bold (700)**, com espaçamento entre letras levemente
  negativo (cerca de -1px em 32px) para a palavra se ler como uma forma só.
- A Comfortaa é **exclusiva do nome da marca**. Todo o resto do texto usa Plus Jakarta Sans.
- Arquivos no repositório: `assets/images/icon.png` (1024×1024) e `assets/images/splash-icon.png`.

---

## 4. Cores

### 4.1 As duas cores de marca

| Nome | Hex | Onde usar |
|---|---|---|
| Azul da marca | `#196FF3` | Fundo do ícone e da tela de abertura. Na landing: blocos de marca, hero com texto branco (contraste 4,6:1). |
| Azul de ação | `#0B5FD9` | Botões, links, texto em destaque, ícones ativos. É o `primary` do app (6,4:1 sobre branco). |
| Azul de ação claro | `#1F6FE8` | Estado de hover ou pressionado sobre azul. Se houver gradiente, só entre `#0B5FD9` e `#1F6FE8`. |
| Azul-céu da cápsula | `#7ED6FE` | Só como acento gráfico (ilustração, detalhe do logo). Nunca como cor de texto. |

### 4.2 Tema claro (padrão)

| Papel | Hex | Uso |
|---|---|---|
| Fundo da página | `#F1F4F8` | Cinza azulado muito claro, não branco puro: é o que faz o cartão branco se destacar |
| Cartão / superfície | `#FFFFFF` | Onde o conteúdo mora |
| Bloco de apoio dentro do cartão | `#F5F7FA` | Resumo, campo, chip não selecionado |
| Superfície intermediária | `#E9EDF3` | Botão secundário, chip |
| Texto principal | `#141719` | Quase preto, nunca `#000` |
| Texto secundário | `#4A5160` | Descrições, rótulos |
| Texto de apoio / contorno | `#6B7280` | Só dentro de cartão branco, como texto |
| Borda sutil | `#CBD2DE` | Divisórias finas |
| Azul diluído | `#EAF1FE` | Fundo de bloco de destaque leve, com texto `#0A3F8F` |

### 4.3 Cores de estado

Cada estado tem três tons: um para texto, um vivo para ícone ou forma, e um diluído para fundo.

| Estado | Texto | Vivo (ícone, barra) | Fundo diluído | Texto sobre o fundo |
|---|---|---|---|---|
| Sucesso ("tomada", "no horário") | `#11803E` | `#12963F` | `#E8F6EC` | `#04502A` |
| Erro / urgente ("atrasada") | `#C90000` | `#FF0000` | `#FDEAEA` | `#8C0009` |
| Atenção | `#A16207` | `#FFC107` (com texto `#231B00`) | `#FDF3C4` | `#5C4A0F` |
| Destaque / próximo | `#0B5FD9` | `#0B5FD9` | `#EAF1FE` | `#0A3F8F` |

Alerta em bloco cheio (como o aviso de estoque baixo): fundo `#9E0008` com texto branco.

Nunca comunicar estado só pela cor: sempre junto de um ícone e de um rótulo em texto.

### 4.4 Tema escuro (para seções escuras da landing)

| Papel | Hex |
|---|---|
| Fundo | `#0F1319` |
| Cartão | `#191F27` |
| Superfície acima do cartão | `#222933` / `#2A323D` |
| Texto principal | `#E6E9EE` |
| Texto secundário | `#AEB6C4` |
| Borda sutil | `#3C4553` |
| Azul de destaque (texto e ícone sobre escuro) | `#7FB2FF` |
| Botão azul | `#0B5FD9` com texto branco |
| Sucesso | `#68DE94` |
| Erro | `#FF9A92` |
| Atenção | `#F5B54A` |

No escuro: nada de preto puro, e a superfície mais alta é a mais clara (elevação por luz, não por
sombra).

---

## 5. Tipografia

**Fonte da interface:** Plus Jakarta Sans (Google Fonts), pesos 300, 400, 500, 600 e 700.
**Fonte da marca:** Comfortaa 700, só no nome "Mapill".

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

| Nível | Peso | Tamanho / altura de linha | Espaçamento entre letras | Uso no app |
|---|---|---|---|---|
| Display | 300 Light | 40 / 52 px | -0.8px | Saudação grande, telas de apresentação |
| Display forte | 700 Bold | 40 / 52 px | -0.8px | Número ou horário em destaque ("14:30") |
| Título grande | 400 Regular | 32 / 42 px | -0.32px | Título de tela |
| Título médio | 500 Medium | 24 / 32 px | -0.24px | Título de seção |
| Título pequeno | 600 SemiBold | 18 / 24 px | 0 | Título de cartão |
| Corpo grande | 400 Regular | 16 / 28 px | 0 | Texto corrido principal |
| Corpo | 400 Regular | 14 / 22 px | 0 | Texto padrão |
| Corpo pequeno | 400 Regular | 12 / 18 px | 0 | Nota, dica |
| Rótulo | 600 SemiBold | 13 / 18 px | 0 | Nome de campo, sem caixa alta |
| Selo | 600 SemiBold | 10 / 14 px | 0.5px, CAIXA ALTA | Etiqueta de uma palavra ("ATRASADA") |

Na landing, os títulos do hero podem crescer além de 40px mantendo a mesma lógica: peso leve em
tamanho grande, espaçamento entre letras levemente negativo, altura de linha de pelo menos 1,26×
o tamanho da fonte.

**Regras de texto:**
- Informação importante (nome de remédio, horário, dose, números) sempre em peso 500 ou mais.
  Peso 300 só em texto decorativo grande.
- Caixa alta só em selos de uma palavra. Frase inteira em caixa alta se lê mais devagar.
- Rótulo se diferencia do valor por peso e cor, não por caixa alta.

---

## 6. Forma, espaço e profundidade

**Cantos arredondados:**

| Token | Raio | Uso |
|---|---|---|
| sm | 6px | Chips, selos pequenos |
| md | 10px | Campos, blocos internos |
| lg | 14px | Cartões **e botões** |
| full | 999px | Só círculos (avatar, botão de ícone) |

Botão usa 14px, não formato de pílula: fica no mesmo idioma dos cartões. É um meio-termo entre o
canto quase reto "de formulário" e o arredondado exagerado de app de consumo.

**Espaçamento (base 4px):** 4, 8, 16, 24, 32, 48, 80. Entre itens de uma lista, 24px; entre
seções diferentes, 40px ou mais (a diferença entre os dois é o que organiza a página).

**Cartão padrão:** fundo `#FFFFFF` sobre página `#F1F4F8`, raio 14px, padding 24px e sombra
suave. **Sombra, nunca borda**: borda de 1px em cartão branco dá cara de formulário HTML.

**Sombras:**

| Nome | Valor CSS | Uso |
|---|---|---|
| Padrão | `0 1px 3px rgba(25, 28, 30, 0.08)` | Todo cartão |
| Elevada | `0 2px 8px rgba(25, 28, 30, 0.10)` | Cartão em foco |
| Flutuante | `0 4px 8px rgba(25, 28, 30, 0.20)` | Botão flutuante, elemento sobre o conteúdo |

**Elemento de destaque:** no app, o cartão "Próxima dose" é o único bloco com fundo azul cheio
(`#0B5FD9`) e texto branco, com um ícone grande de cápsula semitransparente no canto. É a única
quebra da paleta neutra. Na landing, use esse mesmo recurso com a mesma economia: um ou dois
blocos azuis cheios, não a página inteira.

---

## 7. Movimento

- Movimento serve para mostrar que algo mudou, nunca para enfeitar.
- Três durações: 140ms (resposta imediata), 280ms (padrão), 420ms (celebração curta).
- Curva de desaceleração no fim: `cubic-bezier(0.33, 1, 0.68, 1)` (equivalente ao ease-out cúbico).
- Respeitar `prefers-reduced-motion`: com a preferência ativa, sem animação.

---

## 8. Tom de voz

- Português do Brasil, direto e acolhedor, tratando por "você".
- Frases curtas e concretas. Falar do benefício ("o alarme toca até você responder"), não da
  tecnologia.
- Sem alarmismo nem promessa médica: o app ajuda a lembrar e registrar, não substitui o médico.
- Sem travessão (o traço longo) no texto; usar vírgula, dois-pontos ou hífen.

---

## 9. Acessibilidade (inegociável)

- Contraste mínimo WCAG AA: 4,5:1 para texto, 3:1 para ícone e forma. Todas as cores acima já
  foram escolhidas para passar; não clarear nem escurecer sem refazer a conta.
- Alvos de toque grandes (mínimo 44×44px).
- Estado nunca só pela cor (ícone e texto juntos).
- Texto alternativo em toda imagem.

---

## 10. Variáveis CSS prontas

```css
:root {
  /* marca */
  --mapill-azul-marca: #196FF3;
  --mapill-azul-acao: #0B5FD9;
  --mapill-azul-acao-hover: #1F6FE8;
  --mapill-azul-ceu: #7ED6FE;
  --mapill-azul-diluido: #EAF1FE;
  --mapill-azul-diluido-texto: #0A3F8F;

  /* superfícies e texto (claro) */
  --mapill-fundo: #F1F4F8;
  --mapill-cartao: #FFFFFF;
  --mapill-apoio: #F5F7FA;
  --mapill-superficie: #E9EDF3;
  --mapill-texto: #141719;
  --mapill-texto-secundario: #4A5160;
  --mapill-texto-apoio: #6B7280;
  --mapill-borda: #CBD2DE;

  /* estados */
  --mapill-sucesso: #11803E;
  --mapill-sucesso-vivo: #12963F;
  --mapill-sucesso-fundo: #E8F6EC;
  --mapill-erro: #C90000;
  --mapill-erro-fundo: #FDEAEA;
  --mapill-erro-cheio: #9E0008;
  --mapill-atencao: #A16207;
  --mapill-atencao-vivo: #FFC107;
  --mapill-atencao-fundo: #FDF3C4;

  /* tipografia */
  --mapill-fonte: "Plus Jakarta Sans", system-ui, sans-serif;
  --mapill-fonte-marca: "Comfortaa", "Plus Jakarta Sans", sans-serif;

  /* forma */
  --mapill-raio-sm: 6px;
  --mapill-raio-md: 10px;
  --mapill-raio-lg: 14px;
  --mapill-raio-full: 999px;
  --mapill-sombra: 0 1px 3px rgba(25, 28, 30, 0.08);
  --mapill-sombra-elevada: 0 2px 8px rgba(25, 28, 30, 0.10);
  --mapill-sombra-flutuante: 0 4px 8px rgba(25, 28, 30, 0.20);

  /* movimento */
  --mapill-rapido: 140ms;
  --mapill-medio: 280ms;
  --mapill-lento: 420ms;
  --mapill-curva: cubic-bezier(0.33, 1, 0.68, 1);
}

/* seções escuras */
.mapill-escuro {
  --mapill-fundo: #0F1319;
  --mapill-cartao: #191F27;
  --mapill-apoio: #222933;
  --mapill-superficie: #2A323D;
  --mapill-texto: #E6E9EE;
  --mapill-texto-secundario: #AEB6C4;
  --mapill-borda: #3C4553;
  --mapill-azul-destaque: #7FB2FF;
  --mapill-sucesso: #68DE94;
  --mapill-erro: #FF9A92;
  --mapill-atencao: #F5B54A;
}
```

---

## 11. O que evitar

- Fundo branco puro na página inteira (use `#F1F4F8` e cartões brancos por cima).
- Preto puro (`#000`) em texto ou fundo.
- Laranja ou roxo: o app fala quatro cores (azul, verde, vermelho, amarelo), e uma quinta confunde.
- Botões em pílula, bordas grossas em cartões, sombras pesadas.
- Gradientes chamativos, neon, glassmorphism exagerado.
- Comfortaa em qualquer texto que não seja o nome "Mapill".
- Frases inteiras em caixa alta.
- Fotos de banco de imagem genéricas de "médico sorrindo"; prefira telas reais do app.
