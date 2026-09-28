import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Logo oficial: versão clara por padrão e versão escura quando o sistema está no tema escuro. */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {}
