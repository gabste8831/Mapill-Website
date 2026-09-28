import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';

export type IconName =
  | 'arrow-down'
  | 'arrow-up-right'
  | 'bell-ring'
  | 'calendar-days'
  | 'camera'
  | 'check'
  | 'chevron-down'
  | 'clock'
  | 'download'
  | 'file-down'
  | 'file-text'
  | 'heart-pulse'
  | 'mail'
  | 'moon'
  | 'pill'
  | 'pill-bottle'
  | 'shield-check'
  | 'sun'
  | 'triangle-alert'
  | 'users'
  | 'wifi-off';

/**
 * Ícones do Lucide (licença ISC) desenhados direto no template, sem dependência externa.
 * Uso: `<svg appIcon="check"></svg>`. Com `filled`, o corpo do ícone é preenchido e os
 * detalhes internos são "recortados" na cor definida por `--icon-recorte`.
 */
@Component({
  selector: 'svg[appIcon]',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'icon',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'aria-hidden': 'true',
    focusable: 'false',
    '[attr.data-icon]': 'appIcon()',
    '[class.icon-filled]': 'filled()',
  },
})
export class Icon {
  readonly appIcon = input.required<IconName>();
  readonly filled = input(false, { transform: booleanAttribute });
}
