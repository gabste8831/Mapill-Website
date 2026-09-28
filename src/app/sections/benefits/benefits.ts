import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { HealthScreen } from '../../mockups/screens/health-screen/health-screen';
import { StatusBadge } from '../../mockups/status-badge/status-badge';
import { Icon } from '../../shared/icon/icon';

@Component({
  selector: 'app-benefits',
  imports: [Reveal, Icon, PhoneFrame, AlarmScreen, HealthScreen, StatusBadge],
  templateUrl: './benefits.html',
  styleUrl: './benefits.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Benefits {}
