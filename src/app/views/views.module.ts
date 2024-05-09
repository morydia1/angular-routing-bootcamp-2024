import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';


@NgModule({
  declarations: [
    ViewsHomeComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ],
  exports: [
    ViewsHomeComponent
  ]
})
export class ViewsModule { }
