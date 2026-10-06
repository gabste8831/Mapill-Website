/** Print de uma tela do app: versão do tema claro e, se houver, do escuro */
export interface Screenshot {
  claro: string;
  escuro?: string;
}

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

  /**
   * Seção de vídeos. Fica oculta (com os links "Vídeos" do cabeçalho e do rodapé) até existir
   * material gravado. Para publicar: preencha os IDs abaixo e troque para `true`.
   */
  showVideos: false,

  /**
   * Vídeos do YouTube. Cole o ID (o trecho depois de `v=` no endereço) em `id`.
   * Com `id` vazio, o cartão aparece como "em breve".
   */
  videos: [
    { id: '', title: 'Conheça o Mapill em 1 minuto', description: 'Uma volta rápida pelo app.' },
    {
      id: '',
      title: 'Como cadastrar um remédio',
      description: 'Do código de barras ao primeiro alarme.',
    },
    {
      id: '',
      title: 'Para quem cuida de alguém',
      description: 'Acompanhe o tratamento de um familiar.',
    },
  ] as { id: string; title: string; description: string }[],

  /**
   * Prints reais do app, em `public/images/telas/`, um por tema do site. Cada nome-base existe em
   * três larguras (`<nome>-400.webp`, `-640`, `-900`) e o navegador escolhe a mais adequada.
   * Sem `escuro`, o print claro vale para os dois temas (o alarme é azul em ambos).
   * `null` mantém a tela simulada.
   */
  screenshots: {
    hoje: { claro: '/images/telas/hoje-claro', escuro: '/images/telas/hoje-escuro' },
    alarme: { claro: '/images/telas/alarme' },
    saude: { claro: '/images/telas/saude-claro', escuro: '/images/telas/saude-escuro' },
    scanner: { claro: '/images/telas/scanner-claro', escuro: '/images/telas/scanner-escuro' },
    estoque: { claro: '/images/telas/estoque-claro', escuro: '/images/telas/estoque-escuro' },
    adesao: { claro: '/images/telas/adesao-claro', escuro: '/images/telas/adesao-escuro' },
  } as Record<'hoje' | 'alarme' | 'saude' | 'scanner' | 'estoque' | 'adesao', Screenshot | null>,

  /**
   * Fotos dos casos de uso, em `public/images/casos/` (Unsplash, licença livre). Como os prints,
   * cada nome-base existe em três larguras (`-400`, `-640`, `-900`), já recortadas em 4:3.
   * Vazio mostra um espaço reservado.
   */
  useCaseImages: [
    '/images/casos/continuo',
    '/images/casos/muitos-remedios',
    '/images/casos/cuidador',
  ],

  /** Links do rodapé. Vazio esconde o link até a página existir. */
  termsUrl: '',
  privacyUrl: '',
} as const;
