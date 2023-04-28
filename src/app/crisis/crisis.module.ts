import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisComponent } from './crisis/crisis.component';
import { DataComponent } from './crisis/data/data.component';


@NgModule({
  declarations: [
    CrisisComponent,
    DataComponent
  ],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
