import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'my-properties/:id',
    loadComponent: () =>import('./my-properties/my-properties.component').then((m) => m.MyPropertiesComponent)
  },
  {
    path:'my-tenants/:id',
    loadComponent: () => import('./tenants/tenants.component').then((m) => m.TenantsComponent)
  }
];
