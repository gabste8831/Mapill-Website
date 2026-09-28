import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';

@Component({
  selector: 'app-problem',
  imports: [Reveal],
  templateUrl: './problem.html',
  styleUrl: './problem.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Problem {
  protected readonly problems = [
    {
      number: '01',
      title: '“Tomei ou não tomei?”',
      text: 'A dúvida que leva a pular a dose ou, pior, a tomar duas vezes.',
    },
    {
      number: '02',
      title: '“Acabou no domingo.”',
      text: 'O remédio contínuo termina quando a farmácia está fechada, ou a receita vence sem aviso.',
    },
    {
      number: '03',
      title: '“Quais remédios você toma?”',
      text: 'A pergunta do médico ou da emergência, respondida com nomes e doses pela metade.',
    },
  ];
}
