
import { Routes } from '@angular/router';

export const kidsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kids.component').then(c => c.KidsComponent),
  }
];
