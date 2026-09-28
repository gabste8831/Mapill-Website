import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

/** Alarme de dose em tela cheia, como aparece mesmo com o celular bloqueado. */
@Component({
  selector: 'app-alarm-screen',
  imports: [Icon],
  templateUrl: './alarm-screen.html',
  styleUrl: './alarm-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlarmScreen {}
