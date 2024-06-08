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
      },
      {
        path: 'family',
        loadChildren: () => import('./modules/pages/family').then(r => r.familyRoutes)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./modules/pages/cooperative').then(r => r.cooperativeRoutes)
      },
      {
        path: 'kids',
        loadChildren: () => import('./modules/pages/kids').then(r => r.kidsRoutes)
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/pages/account').then(r => r.accountRoutes)
      },
      {
        path: 'register',
        loadChildren: () => import('./modules/pages/register').then(r => r.registerRoutes)
      }
     ]
  }
];
