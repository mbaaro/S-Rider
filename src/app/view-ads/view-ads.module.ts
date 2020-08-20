import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAdsPageRoutingModule } from './view-ads-routing.module';

import { ViewAdsPage } from './view-ads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAdsPageRoutingModule
  ],
  declarations: [ViewAdsPage]
})
export class ViewAdsPageModule {}
