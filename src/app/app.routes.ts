import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'recharge',
    loadComponent: () =>
      import(
        './components/home/components/actions-card/components/financial/recharge/recharge.component'
      ).then((m) => m.RechargeComponent),
  },
];
