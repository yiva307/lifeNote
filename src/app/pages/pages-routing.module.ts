import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      // {
      //   path: 'about',
      //   loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
      // },
      // {
      //   path: 'permission-error',
      //   loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule),
      //   data: { message: 'permissionDenied' }
      // },
      // {
      //   path: 'page-not-found-error',
      //   loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule),
      //   data: { message: 'pageNotFound' }
      // },
      // {
      //   path: 'authority-error',
      //   loadChildren: () => import('./error-page/error-page.module').then(m => m.ErrorPageModule),
      //   data: { message: 'authority' }
      // },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
