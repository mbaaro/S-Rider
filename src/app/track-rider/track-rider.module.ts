import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackRiderPageRoutingModule } from './track-rider-routing.module';

import { TrackRiderPage } from './track-rider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackRiderPageRoutingModule
  ],
  declarations: [TrackRiderPage]
})
export class TrackRiderPageModule {}
