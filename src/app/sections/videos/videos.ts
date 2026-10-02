import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Reveal } from '../../core/reveal.directive';
import { SITE_CONFIG } from '../../core/site-config';

/**
 * Vídeos do YouTube. O player só carrega ao clicar (a miniatura é uma imagem leve),
 * e usa o domínio sem cookies do YouTube.
 */
@Component({
  selector: 'app-videos',
  imports: [Reveal],
  templateUrl: './videos.html',
  styleUrl: './videos.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Videos {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly videos = SITE_CONFIG.videos;
  protected readonly playing = signal<number | null>(null);

  protected thumb(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  }

  protected embed(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
    );
  }

  protected play(index: number): void {
    this.playing.set(index);
  }
}
