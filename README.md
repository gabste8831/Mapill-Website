# Mapill: Your Health Companion

# Landing page do Mapill

## Contexto do produto

Mapill é um app mobile (Android primeiro) de adesão a medicamentos. Ele lembra a hora de cada dose, registra se a pessoa tomou ou pulou, avisa quando o remédio está acabando ou a receita está vencendo, guarda consultas e exames, e mantém uma ficha de saúde com as anotações clínicas da pessoa, que dá para abrir em segundos num consultório ou numa emergência.

O público é amplo, mas as decisões de design pensam primeiro em quem tem mais dificuldade: idosos, pessoas com tratamento contínuo (hipertensão, diabetes, tireoide, saúde mental), pacientes polimedicados e os cuidadores e familiares que acompanham essas pessoas.

A landing page tem que passar a mesma sensação do app: **clínico, calmo, preciso e confiável**. É software de saúde feito com rigor, não um app de bem-estar colorido. Pense na sobriedade de uma boa ferramenta médica, com o acabamento de um produto de consumo bem desenhado.

## O que NÃO fazer (importante)

A página não pode parecer gerada por IA nem ser um template genérico de SaaS. Proibido:

- Gradientes roxo/rosa, blobs abstratos, orbs brilhando, glassmorphism exagerado, fundo escuro com neon.

- Emojis como ícones, ícones de contorno fino genéricos em círculos coloridos, grade de 3 cards iguais com ícone + título + frase vaga.

- Frases vazias como "Revolucione sua saúde", "Potencializado por IA", "Sua jornada começa aqui", "Transforme sua rotina".

- Depoimentos inventados, números inventados ("+10.000 usuários", "98% de satisfação"), logos falsos de parceiros ou selos de imprensa. O app não tem isso e nada deve ser inventado.

- Foto de banco de imagens de médico sorrindo com estetoscópio.

- Borda de 1px cinza em cards (o app usa sombra, nunca borda).

- Texto inteiro em caixa alta. Caixa alta só em selos pequenos de uma palavra.

- Cor decorativa. No Mapill a cor sempre tem função.

- Animação chamativa, parallax pesado, cursor customizado, texto digitando sozinho.

## Identidade visual (seguir à risca)

### Tipografia

- **Plus Jakarta Sans** (Google Fonts, pesos 300, 400, 500, 600, 700) para toda a interface e o texto.

- **Comfortaa 700** só na wordmark "Mapill", com `letter-spacing: -0.03em`. Nunca usar Comfortaa em outro lugar.

- Escala (desktop, reduzir proporcionalmente no mobile):

  - Hero: 56–64px, peso **300 (Light)**, `letter-spacing: -0.02em`, `line-height: 1.12`. O título leve e grande é a assinatura editorial do app.

  - H2 de seção: 36–40px, peso 400, `letter-spacing: -0.01em`.

  - H3: 20–24px, peso 500–600.

  - Corpo: 17–18px, peso 400, `line-height: 1.65`.

  - Rótulo/eyebrow: 13px, peso 600, cor `#4A5160`, **em caixa normal** (não em caixa alta).

  - Selo: 11px, peso 600, caixa alta, `letter-spacing: 0.05em`. Só em selos de uma palavra, como "TOMADA" ou "ATRASADA".

  - Números críticos (horário de dose, dias de estoque): peso 700. O horário em destaque usa 40px/700, como no app.

- `line-height` nunca abaixo de 1.3 em nenhum texto, porque a fonte tem descendentes longos.

### Paleta (tokens CSS em `:root`)

```css

--primary: #0B5FD9;            /* azul de ação e de "agora". 6.4:1 sobre branco */

--primary-2: #1F6FE8;          /* o outro ponto do gradiente azul */

--primary-surface: #EAF1FE;    /* azul diluído para fundos de apoio */

--on-primary-surface: #0A3F8F;

--brand-light: #7ED6FE;        /* azul-céu do logo, só em detalhe gráfico, nunca em texto */

--brand-mid: #196FF3;          /* azul do logo */

--background: #F1F4F8;         /* fundo da página. Não é branco, de propósito */

--surface: #FFFFFF;            /* cards: é onde o conteúdo mora */

--surface-low: #F5F7FA;        /* bloco de apoio dentro de um card */

--surface-container: #E9EDF3;

--on-surface: #141719;         /* texto principal */

--on-surface-variant: #4A5160; /* texto secundário */

--outline: #6B7280;

--outline-variant: #CBD2DE;

--success: #11803E;  --success-surface: #E8F6EC;   /* "tomada", "em dia" */

--error: #C90000;    --error-surface: #FDEAEA;     /* "atrasada", "acabando" */

--warning: #A16207;  --warning-surface: #FDF3C4; --warning-vivid: #FFC107; /* atenção */

```

Regras de cor:

- **O azul marca ação e destaque.** Ele não pinta o fundo das seções. Exceções: o botão principal, uma faixa de CTA final e o mockup da "tela de alarme" (que no app é azul de ponta a ponta).

- Verde, vermelho e amarelo só aparecem **dentro dos mockups** do app, com o significado que têm lá (tomada, atrasada, atenção). Nunca como decoração.

- Um único gradiente é permitido, azul sobre azul: `linear-gradient(135deg, #0B5FD9, #1F6FE8)`. Usar no CTA principal e no bloco da tela de alarme.

- Fazer também o **modo escuro** via `prefers-color-scheme`: fundo `#0F1216`, cards `#181C22`, texto `#E6E9EE`, azul de destaque `#7FB2FF`, `--primary-surface: #16233A`.

### Forma, sombra, espaçamento

- **Sombra no lugar de borda**, sempre:

  - card: `0 1px 3px rgba(25,28,30,.08)`

  - card em destaque ou hover: `0 2px 8px rgba(25,28,30,.10)`

  - elemento flutuante (mockup de celular, botão fixo): `0 4px 8px rgba(25,28,30,.20)` somada a uma sombra longa bem suave `0 24px 48px -12px rgba(11,95,217,.18)`

- Raio de canto moderado, nem quadrado nem pílula: 6px (chips), 10px (botões, campos), 14px (cards), 22–24px só em blocos grandes e na moldura do celular. Botão principal com 10px, **não** em formato pílula.

- Grade de 4px. Espaçamentos: 8, 16, 24, 32, 48, 80. Seções com 96–128px de respiro vertical no desktop e 64px no mobile. Conteúdo com largura máxima de 1120px e texto corrido com no máximo 62ch.

- Ícones **preenchidos** (filled), com cantos arredondados: Material Symbols Rounded com `FILL 1` ou Phosphor na variante "fill". Tamanho 20–24px, na cor do texto ou em azul quando indicam ação.

### Movimento (suave, com propósito)

- Durações: 140ms (hover, press), 280ms (entrada de elemento), 420ms (transições maiores).

- Curva padrão `cubic-bezier(0.33, 1, 0.68, 1)` (ease-out cúbico). Para um único momento enfático, o "check" de dose tomada, usar `cubic-bezier(0.34, 1.56, 0.64, 1)`.

- Entrada ao rolar: fade + translateY de 12–16px, com escalonamento de 60ms entre itens, usando IntersectionObserver. Cada elemento anima uma vez só.

- Hover de card: sobe 2px e troca para a sombra de destaque. Hover de botão: escurece levemente. Ao pressionar: `scale(.98)`.

- Microinterações nos mockups (detalhadas abaixo) valem mais que qualquer efeito decorativo.

- Respeitar `prefers-reduced-motion`: desligar deslocamentos e loops e manter só o fade.

## Logo

O símbolo é uma cápsula na diagonal dividida em duas metades, uma `#196FF3` e outra `#7ED6FE`, ao lado da wordmark "Mapill" em Comfortaa Bold. Recrie a cápsula em SVG simples (duas metades arredondadas encaixadas, girada 45°) até eu subir o arquivo oficial, e deixe o componente fácil de trocar.

## Mockups do app (o coração visual da página)

Nada de screenshots genéricos. Construa as telas do app **em HTML/CSS** dentro de uma moldura de celular Android minimalista (cantos de 36px, bisel fino `#141719`, sem entalhe exagerado). Assim elas ficam nítidas, temáveis e animáveis. Use os tokens acima. Telas:

1. **Home / Hoje**: saudação ("Boa tarde, Helena"). Um card em destaque com a próxima dose: "Próxima dose", horário **14:30** em 40px/700 azul, "Losartana 50 mg · 1 comprimido" e dois botões, "Tomei" (azul preenchido) e "Pular" (texto). Abaixo, a lista do dia em cards brancos, com selos coloridos em caixa alta: "TOMADA" (verde sobre `#E8F6EC` com ícone de check), "ATRASADA" (vermelho sobre `#FDEAEA` com ícone de relógio), e uma pendente em azul claro. Cada estado tem **fundo tingido + ícone + palavra**, nunca só a cor, porque o app é pensado para daltônicos.

2. **Tela de alarme**: fundo inteiro no gradiente azul, horário enorme em branco, nome do remédio, dose, e dois botões grandes: "Tomei" (branco com texto azul) e "Adiar". É a tela que aparece mesmo com o celular bloqueado.

3. **Adesão**: taxa da semana em verde grande ("92%"), barras de 7 dias com as iniciais dos dias embaixo (D S T Q Q S S) em selo pequeno.

4. **Estoque**: cards de remédio com "restam 6 comprimidos · acaba em 3 dias", uma barra de progresso e um aviso amarelo pastel de "Hora de comprar".

5. **Ficha de saúde**: alergias, condições, tipo sanguíneo e contatos de emergência em blocos `#F5F7FA` dentro de um card, com cara de prontuário de bolso.

6. **Cadastro por código de barras**: visor de câmera com a moldura de leitura e, embaixo, um card de sugestão já preenchido ("Losartana potássica 50 mg · 30 comprimidos").

Os nomes de remédio devem ser comuns e realistas (Losartana, Metformina, Levotiroxina, Sinvastatina), com doses plausíveis.

## Estrutura da página

### 0. Navegação

Barra fixa, fundo `--background` com `backdrop-filter: blur(12px)` e opacidade 85% ao rolar, e sombra que só aparece depois do primeiro scroll. Logo à esquerda. Links: Como funciona, Para quem, Privacidade, Perguntas. À direita, botão "Baixar o app".

### 1. Hero

Duas colunas no desktop, empilhadas no mobile.

- Eyebrow: "Adesão a medicamentos, sem esforço"

- H1 (peso 300): **"Cada dose na hora certa. E a certeza de que ela foi tomada."**

- Subtítulo: "O Mapill lembra, registra e avisa antes de faltar. Um app feito para quem cuida da própria saúde, ou da saúde de alguém, todos os dias."

- CTAs: "Baixar para Android" (botão com o gradiente azul e ícone da Play Store) e "Ver como funciona" (link com seta que desce até a seção 3).

- Microcópia abaixo: "Funciona sem internet · Seus dados ficam no seu celular"

- À direita, o celular com a **Home**. Microinteração em loop lento (a cada ~6s): o botão "Tomei" é pressionado, o card da próxima dose ganha o check com a curva enfática, o selo vira "TOMADA" em verde e a lista se reorganiza. Atrás do celular, só um halo radial `#EAF1FE` muito sutil. Nada de blob.

- Um segundo celular menor e levemente sobreposto, com a tela de alarme, dá profundidade.

### 2. O problema (por que isso importa)

Tom sóbrio e humano, sem alarmismo. Fundo `--background`, texto centralizado e estreito.

- H2: "Esquecer um remédio não é descuido. É rotina demais para caber na memória."

- Três blocos em linha, sem cards, separados por espaço e com um número grande em peso 300 ou um ícone preenchido:

  - **"Tomei ou não tomei?"** A dúvida que leva a pular a dose ou, pior, a tomar duas vezes.

  - **"Acabou no domingo."** O remédio de uso contínuo que termina quando a farmácia está fechada, ou a receita que venceu sem aviso.

  - **"Quais remédios você toma?"** A pergunta do médico ou da emergência, respondida de memória, com nomes e doses pela metade.

- Fechamento: "Tratamento que não é seguido não funciona. O Mapill existe para tirar esse peso da cabeça e colocar no bolso."

### 3. Como funciona (três passos)

Linha do tempo horizontal no desktop e vertical no mobile, com uma linha fina `#CBD2DE` ligando os passos. Cada passo tem um mini mockup.

1. **Cadastre em segundos.** Aponte a câmera para o código de barras da caixa. O Mapill reconhece o remédio pela base oficial de medicamentos do Brasil e preenche nome, apresentação e embalagem. Se preferir, digite. (mockup 6)

2. **Receba o alarme.** Na hora da dose o celular toca, mesmo bloqueado, com uma tela que não passa despercebida. Um toque em "Tomei" e está registrado. (mockup 2)

3. **Acompanhe sem pensar.** O app desconta o estoque, avisa antes de acabar e mostra sua semana de adesão. (mockups 3 e 4)

### 4. Benefícios (seção principal, bento grid)

Grid assimétrico de cards brancos com sombra (não uma grade de três cards iguais): um card grande com mockup e os outros menores com um detalhe visual real, como um selo, uma barra ou um número. Títulos concretos, textos curtos:

- **Alarme que acorda o celular.** Não é só uma notificação que some na barra: é uma tela cheia com "Tomei" e "Adiar", mesmo com o aparelho bloqueado.

- **Histórico honesto.** Cada dose fica registrada como tomada, pulada ou atrasada. Nada de "acho que tomei".

- **Estoque que se conta sozinho.** A cada dose tomada, uma unidade a menos. Aviso antes de acabar, não depois.

- **Receita no radar.** O app avisa quando a receita está perto de vencer, a tempo de marcar a consulta.

- **Consultas e exames.** Compromissos no mesmo lugar que os remédios, com lembrete.

- **Ficha de saúde de bolso.** Alergias, condições, tipo sanguíneo e contatos de emergência, prontos para mostrar ao médico ou ao socorrista.

- **Funciona sem internet.** Tudo é salvo primeiro no celular. A conexão é opcional, para ter backup.

- **Relatório em PDF.** Gere um resumo do tratamento e da adesão para levar à consulta.

### 5. Pensado para todo mundo enxergar (acessibilidade como diferencial)

Esta seção diferencia o Mapill. Layout: texto à esquerda e, à direita, o **mesmo card de dose renderizado em 4 temas**, com um seletor de abas que troca o tema do mockup ao vivo com transição de 280ms: Claro, Escuro, Alto contraste (contornos de 2px, texto preto puro) e Daltonismo (estados com pares de cor seguros).

- H2: "Letra grande, contraste medido, cor que nunca fala sozinha."

- Texto: "Todas as cores do Mapill passam na norma internacional de contraste WCAG AA. Nenhum estado depende só da cor: tomada, atrasada e atenção sempre vêm com ícone e palavra. Temas de alto contraste e para daltonismo já vêm no app."

- Lista curta com check: "Botões grandes, fáceis de tocar" · "Texto que não se lê em caixa alta" · "Confirmação antes de qualquer ação que não se desfaz"

### 6. Para quem é

Três colunas com um ícone preenchido e um parágrafo curto cada, sem fotos:

- **Quem trata algo contínuo**: pressão, diabetes, tireoide, colesterol, saúde mental.

- **Quem toma muitos remédios**: horários diferentes, doses diferentes, embalagens diferentes, tudo organizado.

- **Quem cuida de alguém**: filhos que acompanham os pais, cuidadores, famílias.

### 7. Privacidade

Fundo `--surface` com o ícone de escudo preenchido em azul. Tom direto, sem juridiquês.

- H2: "Dado de saúde é dado sensível. Tratamos como tal."

- Quatro pontos em 2x2:

  - "Seus dados ficam no seu celular. O backup na nuvem é opcional."

  - "Tratamento conforme a LGPD, com base legal explícita para dado de saúde."

  - "Apagar tudo é um botão. De verdade, sem letras miúdas."

  - "Sem anúncio, sem venda de dados."

### 8. Perguntas frequentes

Acordeão com animação de altura suave (280ms) e ícone de mais/menos que gira 45°. Perguntas:

- O Mapill substitui a orientação do médico? (Não. Ele organiza e lembra o que foi prescrito, não indica remédio nem dose.)

- Precisa de internet? (Não, funciona offline.)

- O alarme toca com o celular no silencioso ou bloqueado? (Toca com o celular bloqueado. Em alguns aparelhos, como Xiaomi, é preciso liberar a inicialização automática, e o próprio app mostra o passo a passo.)

- Tem para iPhone? (Por enquanto é Android.)

- É gratuito? (deixe o texto como placeholder `[a definir]`)

- Meus dados são compartilhados com alguém? (Não.)

### 9. CTA final

Bloco largo com o gradiente azul, raio de 24px, texto branco, e um celular com a tela de alarme saindo da borda direita.

- H2 (peso 300, branco): "Deixe a lembrança com o Mapill. Fique com a tranquilidade."

- Botão branco com texto azul: "Baixar para Android".

### 10. Rodapé

Fundo `--background`, discreto. Logo, uma frase ("Mapill. Adesão a medicamentos, feita com cuidado."), links (Termos de uso, Política de privacidade, Contato) e a linha: "O Mapill não substitui orientação médica. Em caso de emergência, ligue 192." Se couber, crédito: "Desenvolvido como Trabalho de Conclusão de Curso em Sistemas de Informação, UNIDAVI."

## Voz e escrita

- Português do Brasil, frases curtas, de pessoa para pessoa. Trate por "você".

- Concreto em vez de abstrato: diga "avisa 3 dias antes de acabar" em vez de "gestão inteligente de estoque".

- Calmo e seguro, nunca alarmista ou culpabilizante. Nada de "você está colocando sua saúde em risco".

- Sem ponto de exclamação e sem emoji.

## Requisitos técnicos

- React + Tailwind, com os tokens acima em `tailwind.config` e variáveis CSS. Fontes via Google Fonts com `display=swap`.

- Mobile-first, sem scroll horizontal. Os mockups de celular escalam por `transform` e não quebram layout. No mobile, o bento vira coluna única e a linha do tempo fica vertical.

- Semântica e acessibilidade: landmarks, um único `h1`, contraste AA em todo texto, foco visível (anel de 2px `#0B5FD9` com offset de 2px), alvos de toque de no mínimo 44px, mockups com `aria-hidden` e uma descrição em texto ao lado.

- Performance: sem bibliotecas pesadas de animação. CSS transitions + IntersectionObserver bastam (Framer Motion só se for indispensável). Lighthouse acima de 90.

- SEO: title "Mapill · Lembrete de remédios e adesão ao tratamento", meta description, Open Graph, `lang="pt-BR"`.

- Componentize: `PhoneFrame`, `DoseCard`, `StatusBadge` (tomada, atrasada, pendente, atenção), `ThemeSwitcherDemo`, `Section`, `Faq`.

## Critério de qualidade

Antes de entregar, confira: a página parece feita por um estúdio de design de produto para uma healthtech séria? Cada cor tem função? Algum card tem borda cinza? Alguma frase poderia estar no site de qualquer outro app? Se sim, reescreva.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e0fadfbe-1349-4d98-bc6f-102bc838aa9f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
