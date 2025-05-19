import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: 'clients',
    loadComponent: () => import('./features/client/client-form/client-form.component')
      .then(m => m.ClientFormComponent)
  },
  { 
    path: 'clients/new',
    loadComponent: () => import('./features/client/client-list/client-list.component')
      .then(m => m.ClientListComponent)
  },
  { 
    path: 'reports',
    loadComponent: () => import('./features//client/client-detail/client-details.component')
      .then(m => m.ClientDetailsComponent)
  },
  
];