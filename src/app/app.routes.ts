import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'tasks',
    loadComponent: () =>
      import('./components/tasks/tasks.component').then(
        (m) => m.TasksComponent
      ),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./components/team/team.component').then((m) => m.TeamComponent),
  },
  {
    path: 'me',
    loadComponent: () =>
      import('./components/me/me.component').then((m) => m.MeComponent),
  },
  {
    path: 'recharge',
    loadComponent: () =>
      import(
        './common/recharge/recharge.component'
      ).then((m) => m.RechargeComponent),
  },
  {
    path: 'withdraw',
    loadComponent: () =>
      import('./common/withdraw/withdraw.component').then(
        (m) => m.WithdrawComponent
      ),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
