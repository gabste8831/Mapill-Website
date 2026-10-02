import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'documentacao',
    title: 'Documentação · Mapill',
    loadComponent: () => import('./pages/docs/docs').then((m) => m.Docs),
  },
  { path: '**', redirectTo: '' },
];
