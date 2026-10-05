import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Screenshot } from '../../core/site-config';

/** Larguras geradas para cada print (ver public/images/telas) */
const SHOT_WIDTHS = [400, 640, 900];

/**
 * Moldura de celular Android. O próprio elemento é a moldura: a largura vem da classe aplicada
 * por quem usa, e a altura segue a proporção da tela real do app (prints de 1220 × 2712), para o
 * print aparecer inteiro, do horário à barra de navegação. `--phone-screen-radius` ajusta o canto.
 */
@Component({
  selector: 'app-phone-frame',
  templateUrl: './phone-frame.html',
  styleUrl: './phone-frame.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'img',
    '[attr.aria-label]': 'label()',
  },
})
export class PhoneFrame {
  readonly label = input.required<string>();
  /** Print real do app. Sem print, mostra a tela simulada projetada no conteúdo. */
  readonly shot = input<Screenshot | null>(null);

  protected srcset(base: string): string {
    return SHOT_WIDTHS.map((width) => `${base}-${width}.webp ${width}w`).join(', ');
  }

  protected src(base: string): string {
    return `${base}-640.webp`;
  }
}
