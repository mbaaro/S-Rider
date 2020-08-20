import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmRiderPageRoutingModule } from './confirm-rider-routing.module';

import { ConfirmRiderPage } from './confirm-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmRiderPageRoutingModule
  ],
  declarations: [ConfirmRiderPage]
})
export class ConfirmRiderPageModule {}
