import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/pages/pages.component').then(c => c.PagesComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/pages/home').then(r => r.homeRoutes)
      },
      {
        path: 'strategy',
        loadChildren: () => import('./modules/pages/strategy').then(r => r.strategyRoutes)
      }
     ]
  }
];
