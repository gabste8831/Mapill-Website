import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

/** Cadastro de remédio pelo código de barras da caixa. */
@Component({
  selector: 'app-scanner-screen',
  imports: [Icon],
  templateUrl: './scanner-screen.html',
  styleUrl: './scanner-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScannerScreen {}
