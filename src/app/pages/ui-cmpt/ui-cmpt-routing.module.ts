import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UiCmptComponent } from './ui-cmpt.component';

const routes: Routes = [
  {
    path: '',
    component: UiCmptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiCmptRoutingModule {}
