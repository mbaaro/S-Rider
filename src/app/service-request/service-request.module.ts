import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceRequestPageRoutingModule } from './service-request-routing.module';

import { ServiceRequestPage } from './service-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceRequestPageRoutingModule
  ],
  declarations: [ServiceRequestPage]
})
export class ServiceRequestPageModule {}
