# Mapill · Landing page

Página de publicação do **Mapill**, aplicativo Android de adesão a medicamentos: lembra a hora de cada
dose com um alarme em tela cheia, controla o estoque, guarda receitas e consultas e gera um relatório
clínico em PDF. A identidade visual está em [docs/identidade-visual.md](docs/identidade-visual.md).

## Tecnologia

- **Angular 21** com componentes standalone e signals. Cada componente tem lógica (`.ts`), marcação
  (`.html`) e estilo (`.css`) em arquivos separados.
- **CSS puro**, sem Tailwind nem biblioteca de componentes. Os tokens de cor, tipografia, forma e
  movimento ficam em `src/styles/tokens.css`.
- **Pré-renderização estática**: o build gera o HTML pronto da página (bom para SEO e para abrir
  rápido) e roda em qualquer hospedagem de arquivos estáticos, sem servidor Node.
- Node **20.19+** ou **22.12+**. Para subir para o Angular 22 no futuro, atualize antes o Node para
  22.22.3+ ou 24.15+.

## Rodando

```sh
npm install
npm start          # desenvolvimento em http://localhost:4200
npm run build      # gera o site em dist/mapill-landing/browser
npm run preview    # serve o build localmente para conferir
```

## Publicando

1. **APK:** fica nas [Releases do GitHub](https://github.com/gabste8831/Mapill-Website/releases),
   porque passa do limite de 100 MB para arquivos no repositório. Os botões de download apontam
   para `releases/latest/download/Mapill.apk` (`apkUrl` em `src/app/core/site-config.ts`), então
   uma versão nova é só uma Release nova com um arquivo chamado exatamente `Mapill.apk`. O
   repositório precisa ser público para o link abrir para os visitantes.
2. Rode `npm run build` e publique o conteúdo de `dist/mapill-landing/browser` (Netlify, Vercel,
   GitHub Pages, Firebase Hosting, Cloudflare Pages ou qualquer servidor estático).

## Estrutura

```
src/
├── index.html               título, descrição e Open Graph da página
├── styles.css               importa os estilos globais abaixo
├── styles/
│   ├── tokens.css           cores, fontes, raios, sombras e movimento (tema claro e escuro)
│   ├── base.css             reset e tipografia base
│   ├── layout.css           container, seções, textos de apoio e entrada ao rolar
│   ├── buttons.css          botões
│   └── mockup.css           peças comuns das telas do app desenhadas em HTML/CSS
└── app/
    ├── app.*                monta a página: cabeçalho, seções e rodapé
    ├── core/
    │   ├── site-config.ts   link do APK, e-mail de contato e links do rodapé
    │   └── reveal.directive.ts
    ├── shared/              ícone (SVG do Lucide, sem dependência) e logo oficial
    ├── mockups/             moldura do celular, cartão de dose, selo de estado e as 6 telas do app
    └── sections/            uma pasta por seção da página
public/
└── images/                  logos, ícone, prints do app e fotos dos casos de uso
```

## Onde mexer

- **Textos:** no `.html` de cada seção em `src/app/sections/`. Listas (problemas, público,
  privacidade e perguntas frequentes) ficam no `.ts` da seção.
- **Cores e tipografia:** `src/styles/tokens.css`. As cores já passam no contraste WCAG AA; ao
  trocar alguma, refaça a conta.
- **Links, download e crédito:** `src/app/core/site-config.ts`. Os links de termos de uso e
  política de privacidade só aparecem no rodapé quando o endereço for preenchido; o crédito do
  desenvolvedor (Gabs.dev) aponta para o portfólio definido em `developer.portfolioUrl`.
- **Tema claro/escuro:** o botão do cabeçalho alterna e salva a escolha (`localStorage`, chave
  `mapill-tema`). Sem escolha salva, a página segue o tema do sistema. A lógica fica em
  `src/app/core/theme.service.ts` e o script que evita piscar ao carregar, em `src/index.html`.
- **Efeitos de rolagem:** use `appReveal` (`up`, `left`, `right`, `scale`) e `[revealDelay]` para
  escalonar itens. Com "reduzir movimento" ativo no sistema, todas as animações são desligadas.
