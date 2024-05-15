import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';
import { ModsModule } from '../mods/mods.module';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
    ModsModule
  ],
  exports : []
})
export class ElementsModule  { }
