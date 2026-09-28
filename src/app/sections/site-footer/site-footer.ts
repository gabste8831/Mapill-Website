import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Reveal } from '../../core/reveal.directive';
import { SITE_CONFIG } from '../../core/site-config';
import { GabsDevLogo } from '../../shared/gabs-dev-logo/gabs-dev-logo';
import { Icon } from '../../shared/icon/icon';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-site-footer',
  imports: [Reveal, Logo, Icon, GabsDevLogo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly site = SITE_CONFIG;
  protected readonly year = new Date().getFullYear();
  protected readonly sections = [
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#para-quem', label: 'Para quem' },
    { href: '#privacidade', label: 'Privacidade' },
    { href: '#perguntas', label: 'Perguntas' },
  ];
}
