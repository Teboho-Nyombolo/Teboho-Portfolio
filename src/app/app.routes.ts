import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects) },
  { path: 'portfolio', redirectTo: 'projects' },
  { path: '**', redirectTo: '' },
];
