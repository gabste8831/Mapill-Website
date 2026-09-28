import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

/** `up` sobe, `left`/`right` desliza do lado, `scale` cresce, `none` só marca a classe. */
export type RevealVariant = '' | 'up' | 'left' | 'right' | 'scale' | 'none';

/**
 * Faz o bloco aparecer uma única vez quando entra na tela.
 * Uso: `appReveal`, `appReveal="left"` e `[revealDelay]="120"` para escalonar itens de uma lista.
 * O estado inicial oculto só vale com JS ativo (classe `.js` no <html>), ver styles/layout.css.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[attr.data-reveal]': 'appReveal() || "up"',
    '[style.--reveal-delay.ms]': 'revealDelay()',
    '[class.is-visible]': 'visible()',
  },
})
export class Reveal {
  readonly appReveal = input<RevealVariant>('');
  readonly revealDelay = input(0);

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  protected readonly visible = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (!('IntersectionObserver' in window)) {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        // entra um pouco depois de aparecer na borda de baixo da tela
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
      );
      observer.observe(this.element.nativeElement);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
