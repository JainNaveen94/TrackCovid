import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./Dashboard-Component/dashboard.component";

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {
  constructor() {
    console.log('DashBoard Module is loaded');
  }
}
