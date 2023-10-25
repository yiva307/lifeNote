import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { SharedModule } from '../../shared/shared.module';

import { DashboardRoutingModule } from './dashbaord-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, GridsterModule, SharedModule]
})
export class DashboardModule {}
