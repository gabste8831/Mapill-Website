import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { DoseCard } from '../../dose-card/dose-card';
import { StatusBadge } from '../../status-badge/status-badge';

/** Tela "Hoje". Com `animate`, simula em loop lento a confirmação da próxima dose. */
@Component({
  selector: 'app-today-screen',
  imports: [DoseCard, StatusBadge],
  templateUrl: './today-screen.html',
  styleUrl: './today-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodayScreen {
  readonly animate = input(false, { transform: booleanAttribute });
  protected readonly taken = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!this.animate() || reducedMotion) {
        return;
      }

      let resetTimer: number | undefined;
      const confirmDose = () => {
        this.taken.set(true);
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => this.taken.set(false), 2600);
      };
      const firstTimer = window.setTimeout(confirmDose, 2200);
      const loopTimer = window.setInterval(confirmDose, 6200);

      destroyRef.onDestroy(() => {
        window.clearTimeout(firstTimer);
        window.clearTimeout(resetTimer);
        window.clearInterval(loopTimer);
      });
    });
  }
}
