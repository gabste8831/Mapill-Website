import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { Icon } from '../icon/icon';

/** Botão de tema claro/escuro. O ícone visível segue o data-theme via CSS, sem piscar. */
@Component({
  selector: 'app-theme-toggle',
  imports: [Icon],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);
  protected readonly isDark = computed(() => this.themeService.theme() === 'dark');

  protected toggle(event: MouseEvent): void {
    // O círculo da transição nasce no centro do botão (funciona também com teclado)
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    this.themeService.toggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  }
}
