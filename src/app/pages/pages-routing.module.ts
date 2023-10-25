import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from '@shared/auth/auth.guard';
// import { LicenseReadyGuard } from '@shared/auth/license-ready.guard';
// import { LicenseGuard } from '@shared/auth/license.guard';
// import { RoleName } from '@shared/auth/user.model';

import { PagesComponent } from './pages.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    // canActivate: [LicenseReadyGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule),
        // canActivate: [AuthGuard],
        // data: { roles: [RoleName.Admin, RoleName.Operator, RoleName.Viewer] }
      },
      {
        path: 'tracking',
        loadChildren: () => import('./tracking/tracking.module').then(m => m.TrackingModule),
        // canActivate: [AuthGuard],
        // data: { roles: [RoleName.Admin] }
      },
      // {
      //   path: 'about',
      //   loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
      //   canActivate: [AuthGuard],
      //   data: { roles: [RoleName.Admin, RoleName.Operator, RoleName.Viewer] }
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
