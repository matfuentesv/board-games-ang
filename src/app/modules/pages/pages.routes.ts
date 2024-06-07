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
        loadChildren: () => import('./strategy').then(r => r.strategyRoutes)
      }
    ]
  }
]
