import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COllectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CollectionsHomeComponent
  ],
  imports: [
    CommonModule,
    COllectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class COllectionsModule { }
