import { ActivatedRouteSnapshot, ResolveFn, Routes } from '@angular/router';
import { LangDataService } from './service/lang-data.service';
import { inject } from '@angular/core';

export const dataResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot) => {
  const dataService = inject(LangDataService);
  return dataService.getData();
};

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./word/word.component')
      .then(m => m.WordComponent),
    resolve: {
      data: dataResolver
    }
  }
];
