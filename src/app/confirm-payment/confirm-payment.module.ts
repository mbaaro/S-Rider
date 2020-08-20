import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmPaymentPageRoutingModule } from './confirm-payment-routing.module';

import { ConfirmPaymentPage } from './confirm-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmPaymentPageRoutingModule
  ],
  declarations: [ConfirmPaymentPage]
})
export class ConfirmPaymentPageModule {}
