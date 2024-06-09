// src/app/strategy/register.routes.ts
import { Routes } from '@angular/router';

export const cooperativeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./cooperative.component').then(c => c.CooperativeComponent),
  }
];