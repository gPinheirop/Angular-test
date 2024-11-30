import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then((p) => p.HomeComponent);
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./pages/todos/todos.component').then(
        (p) => p.TodosComponent
      );
    },
  },
];
