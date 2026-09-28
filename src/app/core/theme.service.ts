import { DOCUMENT, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

/** Mesma chave e mesmas cores usadas pelo script do index.html. */
const STORAGE_KEY = 'mapill-tema';
const THEME_COLOR: Record<Theme, string> = { light: '#F1F4F8', dark: '#0F1319' };

/**
 * Tema claro ou escuro da página. Começa pelo que o script do index.html aplicou; depois da
 * primeira troca manual, a escolha fica salva e deixa de seguir o sistema.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly theme = signal<Theme>('light');

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const root = this.document.documentElement;
    this.theme.set(root.dataset['theme'] === 'dark' ? 'dark' : 'light');

    // Sem escolha salva, acompanha o sistema se ele mudar com a página aberta
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addEventListener('change', (event) => {
      if (!this.savedTheme()) {
        this.apply(event.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Alterna o tema. Com `origin`, o novo tema se abre num círculo a partir desse ponto
   * (View Transitions API), quando o navegador suporta e a pessoa não pediu menos movimento.
   */
  toggle(origin?: { x: number; y: number }): void {
    const next: Theme = this.theme() === 'dark' ? 'light' : 'dark';
    const change = () => {
      this.apply(next);
      this.save(next);
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!origin || reducedMotion || !('startViewTransition' in this.document)) {
      change();
      return;
    }

    const { x, y } = origin;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );
    const transition = this.document.startViewTransition(change);
    transition.ready
      .then(() => {
        this.document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 520,
            easing: 'cubic-bezier(0.33, 1, 0.68, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => undefined);
  }

  private apply(theme: Theme): void {
    this.document.documentElement.setAttribute('data-theme', theme);
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme]);
    this.theme.set(theme);
  }

  private savedTheme(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  private save(theme: Theme): void {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Sem armazenamento (modo privado, por exemplo): o tema vale só nesta visita
    }
  }
}
