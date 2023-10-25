import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tracking', component: TrackingComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
