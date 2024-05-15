import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StaticsComponent } from './statics/statics.component';
import { ItemsComponent } from './items/items.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StaticsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ViewsModule { }
