import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { SITE_CONFIG } from '../../core/site-config';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { Icon } from '../../shared/icon/icon';

/** Bloco azul final, com o download do APK. */
@Component({
  selector: 'app-download-cta',
  imports: [Reveal, Icon, PhoneFrame, AlarmScreen],
  templateUrl: './download-cta.html',
  styleUrl: './download-cta.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DownloadCta {
  protected readonly site = SITE_CONFIG;
}
