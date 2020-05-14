import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from "./Dashboard-Component/dashboard.component";

import { SharedModule } from '../shared/shared.module';
import { ResultCardComponent } from './shared/components/result-card/result-card.component';
import { ResultTableComponent } from './shared/components/result-table/result-table.component';
import { ResultPopupComponent } from './shared/components/result-popup/result-popup.component';

@NgModule({
  declarations: [DashboardComponent, ResultCardComponent, ResultTableComponent, ResultPopupComponent],
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
