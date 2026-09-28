import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-privacy',
  imports: [Reveal, Icon],
  templateUrl: './privacy.html',
  styleUrl: './privacy.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Privacy {
  protected readonly promises = [
    'Seus dados ficam no celular. O backup na sua conta Google é opcional.',
    'Tratamento conforme a LGPD, com base legal explícita para dado de saúde.',
    'Apagar tudo é um botão. De verdade, sem letras miúdas.',
    'Sem anúncio, sem venda de dados.',
  ];
}
