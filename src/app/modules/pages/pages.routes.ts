import {Routes} from "@angular/router";


export const pagesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages.component').then(c => c.PagesComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'strategy',
        loadChildren: () => import('./categories/strategy').then(r => r.strategyRoutes)
      },
      {
        path: 'family',
        loadChildren: () => import('./categories/family').then(r => r.familyRoutes)
      },
      {
        path: 'cooperative',
        loadChildren: () => import('./categories/cooperative').then(r => r.cooperativeRoutes)
      },
      {
        path: 'kids',
        loadChildren: () => import('./categories/kids').then(r => r.kidsRoutes)
      },
      {
        path: 'login',
        loadChildren: () => import('./login').then(r => r.loginRoutes)
      },
      {
        path: 'register',
        loadChildren: () => import('./register').then(r => r.registerRoutes)
      },
      {
        path: 'recover-password',
        loadChildren: () => import('./recover-password').then(r => r.recoverPasswordRoutes)
      },
      {
        path: 'account',
        loadChildren: () => import('./account').then(r => r.accountRoutes)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin').then(r => r.adminRoutes)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart').then(r => r.cartRoutes)
      }
    ]
  }
]
