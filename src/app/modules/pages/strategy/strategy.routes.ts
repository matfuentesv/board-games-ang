import {Routes} from "@angular/router";


export const strategyRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./strategy.component').then(c => c.StrategyComponent),

  }
]
