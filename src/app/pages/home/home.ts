import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accessibility } from '../../sections/accessibility/accessibility';
import { Benefits } from '../../sections/benefits/benefits';
import { DownloadCta } from '../../sections/download-cta/download-cta';
import { Faq } from '../../sections/faq/faq';
import { Hero } from '../../sections/hero/hero';
import { HowItWorks } from '../../sections/how-it-works/how-it-works';
import { Problem } from '../../sections/problem/problem';
import { Videos } from '../../sections/videos/videos';

/** Página inicial: as seções da landing page, em ordem. */
@Component({
  selector: 'app-home',
  imports: [Hero, Problem, HowItWorks, Benefits, Accessibility, Videos, Faq, DownloadCta],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
