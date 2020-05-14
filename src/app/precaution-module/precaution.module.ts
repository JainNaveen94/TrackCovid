import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrecautionComponent } from "./Precaution-Component/precaution.component";

import { SharedModule } from '../core/shared.module';

@NgModule({
  declarations: [PrecautionComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PrecautionComponent
  ]
})
export class PrecautionModule {
  constructor() {
    console.log('Precaution Module is loaded');
  }
}
