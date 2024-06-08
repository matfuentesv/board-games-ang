// src/app/strategy/register.routes.ts
import { Routes } from '@angular/router';

export const loginRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./login.component').then(c => c.LoginComponent),
  }
];
