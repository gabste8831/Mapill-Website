import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChildren,
} from '@angular/core';
import { DoseCard } from '../../../mockups/dose-card/dose-card';
import { StatusBadge } from '../../../mockups/status-badge/status-badge';

type DemoTheme = 'claro' | 'escuro' | 'contraste' | 'daltonismo';

/** Abas que trocam ao vivo o tema do cartão de dose, como os temas do app. */
@Component({
  selector: 'app-theme-switcher',
  imports: [DoseCard, StatusBadge],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcher {
  protected readonly themes: { value: DemoTheme; label: string }[] = [
    { value: 'claro', label: 'Claro' },
    { value: 'escuro', label: 'Escuro' },
    { value: 'contraste', label: 'Alto contraste' },
    { value: 'daltonismo', label: 'Daltonismo' },
  ];
  protected readonly theme = signal<DemoTheme>('claro');
  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  protected select(theme: DemoTheme): void {
    this.theme.set(theme);
  }

  /** Setas, Home e End movem entre as abas, como no padrão de abas do WAI-ARIA. */
  protected onKeydown(event: KeyboardEvent, index: number): void {
    const last = this.themes.length - 1;
    const next: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const target = next[event.key];
    if (target === undefined) {
      return;
    }

    event.preventDefault();
    this.theme.set(this.themes[target].value);
    this.tabs()[target]?.nativeElement.focus();
  }
}
