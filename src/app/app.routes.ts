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
        loadChildren: () => import('./modules/pages/categories/strategy').then(r => r.strategyRoutes)
      },
      {
        path: 'family',
        loadChildren: () => import('./modules/pages/categories/family').then(r => r.familyRoutes)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./modules/pages/categories/cooperative').then(r => r.cooperativeRoutes)
      },
      {
        path: 'kids',
        loadChildren: () => import('./modules/pages/categories/kids').then(r => r.kidsRoutes)
      },
      {
        path: 'login',
        loadChildren: () => import('./modules/pages/login').then(r => r.loginRoutes)
      },
      {
        path: 'register',
        loadChildren: () => import('./modules/pages/register').then(r => r.registerRoutes)
      },
      {
        path: 'recover-password',
        loadChildren: () => import('./modules/pages/recover-password').then(r => r.recoverPasswordRoutes)
      },
      {
        path: 'account',
        loadChildren: () => import('./modules/pages/account').then(r => r.accountRoutes)
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/pages/admin').then(r => r.adminRoutes)
      }
     ]
  }
];
