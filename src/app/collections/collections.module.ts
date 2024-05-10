import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { COllectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { companiesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    companiesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    COllectionsRoutingModule,
    SharedModule
  ],
  exports: []
})
export class COllectionsModule { }
