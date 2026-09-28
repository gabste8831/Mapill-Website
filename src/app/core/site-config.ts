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
  termsUrl: '',
  privacyUrl: '',
} as const;
