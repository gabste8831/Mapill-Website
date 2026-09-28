import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

/** Estoque dos remédios com aviso antes de acabar. */
@Component({
  selector: 'app-stock-screen',
  imports: [Icon],
  templateUrl: './stock-screen.html',
  styleUrl: './stock-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockScreen {}
