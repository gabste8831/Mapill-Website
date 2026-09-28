import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { Icon, IconName } from '../../shared/icon/icon';

@Component({
  selector: 'app-audience',
  imports: [Reveal, Icon],
  templateUrl: './audience.html',
  styleUrl: './audience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Audience {
  protected readonly groups: { icon: IconName; title: string; text: string }[] = [
    {
      icon: 'pill',
      title: 'Quem trata algo contínuo',
      text: 'Pressão, diabetes, tireoide, colesterol ou saúde mental.',
    },
    {
      icon: 'pill-bottle',
      title: 'Quem toma muitos remédios',
      text: 'Horários, doses e embalagens diferentes, tudo organizado.',
    },
    {
      icon: 'users',
      title: 'Quem cuida de alguém',
      text: 'Filhos que acompanham os pais, cuidadores e famílias.',
    },
  ];
}
