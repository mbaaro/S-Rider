import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceRequestPage } from './service-request.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRequestPageRoutingModule {}
