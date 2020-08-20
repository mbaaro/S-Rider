import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TownPickerPageRoutingModule } from './town-picker-routing.module';

import { TownPickerPage } from './town-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownPickerPageRoutingModule
  ],
  declarations: [TownPickerPage]
})
export class TownPickerPageModule {}
