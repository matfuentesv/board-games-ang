// src/app/strategy/family.routes.ts
import { Routes } from '@angular/router';

export const familyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./family.component').then(c => c.FamilyComponent),
  }
];