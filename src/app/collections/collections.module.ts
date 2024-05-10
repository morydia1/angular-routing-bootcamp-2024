import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COllectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    COllectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class COllectionsModule { }
