import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiderProfilePageRoutingModule } from './rider-profile-routing.module';

import { RiderProfilePage } from './rider-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RiderProfilePageRoutingModule
  ],
  declarations: [RiderProfilePage]
})
export class RiderProfilePageModule {}
