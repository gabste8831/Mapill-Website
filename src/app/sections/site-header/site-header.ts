import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  afterNextRender,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE_CONFIG } from '../../core/site-config';
import { Logo } from '../../shared/logo/logo';
import { ThemeToggle } from '../../shared/theme-toggle/theme-toggle';

/** Barra fixa. A sombra aparece depois do primeiro scroll e a barra fina mostra o progresso. */
@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, Logo, ThemeToggle],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onScroll()',
  },
})
export class SiteHeader {
  protected readonly site = SITE_CONFIG;
  protected readonly scrolled = signal(false);
  private readonly progressBar = viewChild.required<ElementRef<HTMLElement>>('progressBar');
  private frame = 0;

  constructor() {
    afterNextRender(() => this.update());
  }

  /** Agrupa os eventos de scroll em um quadro de animação */
  protected onScroll(): void {
    if (!this.frame) {
      this.frame = requestAnimationFrame(() => {
        this.frame = 0;
        this.update();
      });
    }
  }

  private update(): void {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    // Escrita direta no estilo: não precisa passar pela detecção de mudanças a cada quadro
    this.progressBar().nativeElement.style.transform = `scaleX(${progress})`;
    this.scrolled.set(window.scrollY > 16);
  }
}
