import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { ThemeSwitcher } from './theme-switcher/theme-switcher';

@Component({
  selector: 'app-accessibility',
  imports: [Reveal, ThemeSwitcher],
  templateUrl: './accessibility.html',
  styleUrl: './accessibility.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accessibility {}
