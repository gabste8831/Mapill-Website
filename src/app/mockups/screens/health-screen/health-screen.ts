import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Ficha de saúde: dados essenciais prontos para mostrar ao médico ou ao socorrista. */
@Component({
  selector: 'app-health-screen',
  templateUrl: './health-screen.html',
  styleUrl: './health-screen.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HealthScreen {}
