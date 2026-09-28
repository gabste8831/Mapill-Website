import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Moldura de celular Android. O próprio elemento é a moldura: o tamanho vem da classe
 * aplicada por quem usa, e `--phone-screen-radius` ajusta o canto da tela.
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
}
