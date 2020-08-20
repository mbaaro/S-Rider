import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppHelpPageRoutingModule } from './app-help-routing.module';

import { AppHelpPage } from './app-help.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHelpPageRoutingModule
  ],
  declarations: [AppHelpPage]
})
export class AppHelpPageModule {}
