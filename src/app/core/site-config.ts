/**
 * Endereços usados pela página. Troque aqui e todos os botões e links acompanham.
 */
export const SITE_CONFIG = {
  /**
   * Arquivo do aplicativo. Coloque o APK em `public/downloads/mapill.apk`
   * ou troque por um link externo (por exemplo, a última versão no GitHub Releases).
   */
  apkUrl: '/downloads/mapill.apk',

  contactEmail: 'contato@mapill.app',

  /** Crédito do desenvolvedor no rodapé */
  developer: {
    name: 'Gabriel Steffens',
    portfolioUrl: 'https://gabrielsteffens.vercel.app',
  },

  /** Links do rodapé. Vazio esconde o link até a página existir. */
  /**
   * Vídeos do YouTube. Cole o ID (o trecho depois de `v=` no endereço) em `id`.
   * Com `id` vazio, o cartão aparece como "em breve".
   */
  videos: [
    { id: '', title: 'Conheça o Mapill em 1 minuto', description: 'Uma volta rápida pelo app.' },
    { id: '', title: 'Como cadastrar um remédio', description: 'Do código de barras ao primeiro alarme.' },
    { id: '', title: 'Para quem cuida de alguém', description: 'Acompanhe o tratamento de um familiar.' },
  ] as { id: string; title: string; description: string }[],

  /**
   * Prints reais do app, dentro de `public/images/telas/`. Vazio mantém a tela simulada.
   * Exemplo: alarme: '/images/telas/alarme.png'
   */
  screenshots: {
    hoje: '',
    alarme: '',
    saude: '',
    scanner: '',
    estoque: '',
    adesao: '',
  },

  /** Fotos dos casos de uso, em `public/images/casos/`. Vazio mostra um espaço reservado. */
  useCaseImages: ['', '', ''],

  termsUrl: '',
  privacyUrl: '',
} as const;
