import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmRiderPage } from './confirm-rider.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmRiderPageRoutingModule {}
