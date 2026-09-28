import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Icon, IconName } from '../../shared/icon/icon';

export type DoseStatus = 'tomada' | 'atrasada' | 'pendente' | 'atencao';

const STATUS: Record<DoseStatus, { label: string; icon: IconName }> = {
  tomada: { label: 'Tomada', icon: 'check' },
  atrasada: { label: 'Atrasada', icon: 'clock' },
  pendente: { label: 'Pendente', icon: 'clock' },
  atencao: { label: 'Atenção', icon: 'triangle-alert' },
};

/** Selo de estado: fundo diluído, ícone e palavra juntos. Nunca só a cor. */
@Component({
  selector: 'app-status-badge',
  imports: [Icon],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-status]': 'status()',
  },
})
export class StatusBadge {
  readonly status = input.required<DoseStatus>();
  protected readonly info = computed(() => STATUS[this.status()]);
}
