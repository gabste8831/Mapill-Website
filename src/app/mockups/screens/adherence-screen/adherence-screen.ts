import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Adesão da semana: taxa geral e barras por dia. */
@Component({
  selector: 'app-adherence-screen',
  templateUrl: './adherence-screen.html',
  styleUrl: './adherence-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdherenceScreen {
  protected readonly week = [
    { day: 'D', value: 82 },
    { day: 'S', value: 100 },
    { day: 'T', value: 94 },
    { day: 'Q', value: 72 },
    { day: 'Q', value: 100 },
    { day: 'S', value: 91 },
    { day: 'S', value: 100 },
  ];
}
