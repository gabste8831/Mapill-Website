import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accessibility } from './sections/accessibility/accessibility';
import { Audience } from './sections/audience/audience';
import { Benefits } from './sections/benefits/benefits';
import { DownloadCta } from './sections/download-cta/download-cta';
import { Faq } from './sections/faq/faq';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Privacy } from './sections/privacy/privacy';
import { Problem } from './sections/problem/problem';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteHeader } from './sections/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [
    SiteHeader,
    Hero,
    Problem,
    HowItWorks,
    Benefits,
    Accessibility,
    Audience,
    Privacy,
    Faq,
    DownloadCta,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
