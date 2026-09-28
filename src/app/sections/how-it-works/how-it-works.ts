import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { PhoneFrame } from '../../mockups/phone-frame/phone-frame';
import { AdherenceScreen } from '../../mockups/screens/adherence-screen/adherence-screen';
import { AlarmScreen } from '../../mockups/screens/alarm-screen/alarm-screen';
import { ScannerScreen } from '../../mockups/screens/scanner-screen/scanner-screen';
import { StockScreen } from '../../mockups/screens/stock-screen/stock-screen';

@Component({
  selector: 'app-how-it-works',
  imports: [Reveal, PhoneFrame, ScannerScreen, AlarmScreen, AdherenceScreen, StockScreen],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowItWorks {}
