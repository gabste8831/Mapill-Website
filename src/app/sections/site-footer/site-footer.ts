import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Reveal } from '../../core/reveal.directive';
import { SITE_CONFIG } from '../../core/site-config';
import { GabsDevLogo } from '../../shared/gabs-dev-logo/gabs-dev-logo';
import { Icon } from '../../shared/icon/icon';
import { Logo } from '../../shared/logo/logo';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, Reveal, Logo, Icon, GabsDevLogo],
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly site = SITE_CONFIG;
  protected readonly year = new Date().getFullYear();
  protected readonly sections = [
    { fragment: 'como-funciona', label: 'Como funciona' },
    { fragment: 'recursos', label: 'Recursos' },
    { fragment: 'videos', label: 'Vídeos' },
    { fragment: 'perguntas', label: 'Perguntas' },
  ];
}
