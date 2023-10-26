import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { SharedModule } from '../../shared/shared.module';

import { TrackingRoutingModule } from './tracking-routing.module';
import { TrackingComponent } from './tracking.component';

@NgModule({
  declarations: [TrackingComponent],
  imports: [CommonModule, TrackingRoutingModule, GridsterModule, SharedModule]
})
export class TrackingModule {}
