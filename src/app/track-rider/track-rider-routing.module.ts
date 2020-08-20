import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackRiderPage } from './track-rider.page';

const routes: Routes = [
  {
    path: '',
    component: TrackRiderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackRiderPageRoutingModule {}
