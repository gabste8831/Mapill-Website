import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { HealthScreen } from '../../mockups/screens/health-screen/health-screen';
import { StatusBadge } from '../../mockups/status-badge/status-badge';
import { Icon } from '../../shared/icon/icon';
import { SITE_CONFIG } from '../../core/site-config';

@Component({
  selector: 'app-benefits',
  imports: [Reveal, Icon, PhoneFrame, AlarmScreen, HealthScreen, StatusBadge],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Benefits {
  protected readonly useCases = [
    {
      title: 'Quem trata algo contínuo',
      text: 'Pressão, diabetes, tireoide ou colesterol, sem depender da memória.',
      alt: 'Pessoa idosa tomando o remédio da manhã',
      image: SITE_CONFIG.useCaseImages[0],
    },
    {
      title: 'Quem toma muitos remédios',
      text: 'Horários e embalagens diferentes, tudo organizado em um lugar.',
      alt: 'Pessoa idosa conferindo o horário do remédio no celular',
      image: SITE_CONFIG.useCaseImages[1],
    },
    {
      title: 'Quem cuida de alguém',
      text: 'Filhos, cuidadores e famílias acompanhando o tratamento de perto.',
      alt: 'Filha ajudando a mãe a usar o aplicativo',
      image: SITE_CONFIG.useCaseImages[2],
    },
  ];
  protected readonly shots = SITE_CONFIG.screenshots;
}
