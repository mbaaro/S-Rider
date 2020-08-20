import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAdPage } from './edit-ad.page';

const routes: Routes = [
  {
    path: '',
    component: EditAdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAdPageRoutingModule {}
