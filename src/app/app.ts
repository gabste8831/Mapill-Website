import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Lenis from 'lenis';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    const destroyRef = inject(DestroyRef);

    /*
     * Rolagem suave da roda do mouse e do touchpad (Lenis). No toque do celular a rolagem
     * continua a nativa, e quem pede menos movimento no sistema também fica com a nativa.
     * Os links de âncora seguem com o scroll-behavior do CSS e o roteador do Angular.
     *
     * Cada clique da roda vira uma animação de duração fixa com desaceleração longa: rolando
     * devagar, a próxima começa antes de a anterior parar, e o movimento não fica aos trancos.
     * `duration` maior deixa mais macio (e mais "atrasado"); menor, mais firme.
     */
    afterNextRender(() => {
      const lenis = new Lenis({
        autoRaf: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        stopInertiaOnNavigate: true,
      });
      destroyRef.onDestroy(() => lenis.destroy());
    });
  }
}
