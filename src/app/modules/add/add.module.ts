import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRoutingModule } from './add.routing.module';
import { AddComponent } from './add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AddRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AddComponent
  ]
})
export class AddModule { }
