import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdRequestPage } from './ad-request.page';

const routes: Routes = [
  {
    path: '',
    component: AdRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdRequestPageRoutingModule {}
