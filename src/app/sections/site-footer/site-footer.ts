import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITE_CONFIG } from '../../core/site-config';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-site-footer',
  imports: [Logo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly site = SITE_CONFIG;
}
