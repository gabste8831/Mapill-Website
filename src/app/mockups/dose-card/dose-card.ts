import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { StatusBadge } from '../status-badge/status-badge';

/** Cartão "Próxima dose". Completo tem os botões Tomei e Pular; compacto mostra só o selo. */
@Component({
  selector: 'app-dose-card',
  imports: [Icon, StatusBadge],
  templateUrl: './dose-card.html',
  styleUrl: './dose-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoseCard {
  readonly compact = input(false, { transform: booleanAttribute });
  readonly taken = input(false, { transform: booleanAttribute });
}
