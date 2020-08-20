import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdProfilePageRoutingModule } from './ad-profile-routing.module';

import { AdProfilePage } from './ad-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdProfilePageRoutingModule
  ],
  declarations: [AdProfilePage]
})
export class AdProfilePageModule {}
