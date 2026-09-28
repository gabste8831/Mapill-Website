import { ChangeDetectionStrategy, Component, afterNextRender, signal } from '@angular/core';
import { SITE_CONFIG } from '../../core/site-config';
import { Logo } from '../../shared/logo/logo';

/** Barra fixa. A sombra só aparece depois do primeiro scroll. */
@Component({
  selector: 'app-site-header',
  imports: [Logo],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'updateScrolled()',
  },
})
export class SiteHeader {
  protected readonly site = SITE_CONFIG;
  protected readonly scrolled = signal(false);

  constructor() {
    afterNextRender(() => this.updateScrolled());
  }

  protected updateScrolled(): void {
    this.scrolled.set(window.scrollY > 16);
  }
}
