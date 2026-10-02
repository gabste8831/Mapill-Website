import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../core/site-config';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { TodayScreen } from '../../mockups/screens/today-screen/today-screen';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon, PhoneFrame, TodayScreen, AlarmScreen],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly shots = SITE_CONFIG.screenshots;
  protected readonly site = SITE_CONFIG;
}
