import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TownPickerPage } from './town-picker.page';

const routes: Routes = [
  {
    path: '',
    component: TownPickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TownPickerPageRoutingModule {}
