import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdProfilePage } from './ad-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AdProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdProfilePageRoutingModule {}
