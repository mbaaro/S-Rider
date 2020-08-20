import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiderProfilePage } from './rider-profile.page';

const routes: Routes = [
  {
    path: '',
    component: RiderProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiderProfilePageRoutingModule {}
