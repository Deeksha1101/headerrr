import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderStyleEightPageRoutingModule } from './header-style-eight-routing.module';

import { HeaderStyleEightPage } from './header-style-eight.page';

import { ComponentsModule } from 'src/app/components/components.modules';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderStyleEightPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HeaderStyleEightPage]
})
export class HeaderStyleEightPageModule { }
