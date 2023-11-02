import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';

import { SharedModule } from '../../shared/shared.module';

import { UiCmptRoutingModule } from './ui-cmpt-routing.module';
import { UiCmptComponent } from './ui-cmpt.component';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    UiCmptComponent,
    TableComponent,
    CardComponent
  ],
  imports: [CommonModule, UiCmptRoutingModule, GridsterModule, SharedModule ]
})
export class UiCmptModule {}
