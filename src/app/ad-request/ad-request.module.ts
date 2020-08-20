import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdRequestPageRoutingModule } from './ad-request-routing.module';

import { AdRequestPage } from './ad-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdRequestPageRoutingModule
  ],
  declarations: [AdRequestPage]
})
export class AdRequestPageModule {}
