import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { TreeModule } from '@circlon/angular-tree-component';

import { SharedModule } from '../shared/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  // imports: [RouterModule, SharedModule, PagesRoutingModule, TreeModule],
  imports: [RouterModule, SharedModule, PagesRoutingModule],
  exports: []
})
export class PagesModule {}
