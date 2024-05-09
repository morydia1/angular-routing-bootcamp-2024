import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COllectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    COllectionsRoutingModule
  ],
  exports: []
})
export class COllectionsModule { }
