import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Logo Gabs.dev (Gabriel Steffens), desenhado inline para herdar as cores do tema.
 * O viewBox recorta só a área ocupada pelo desenho original (2000x1000).
 */
@Component({
  selector: 'svg[appGabsDevLogo]',
  templateUrl: './gabs-dev-logo.html',
  styleUrl: './gabs-dev-logo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    viewBox: '40 165 1918 668',
    'aria-hidden': 'true',
    focusable: 'false',
  },
})
export class GabsDevLogo {}
