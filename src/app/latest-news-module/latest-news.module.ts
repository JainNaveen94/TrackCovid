import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LatestNewsComponent } from "./Latest-News-Component/latest-news.component";

import { SharedModule } from '../core/shared.module';

@NgModule({
  declarations: [LatestNewsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LatestNewsComponent
  ]
})
export class LatestNewsModule {
  constructor() {
    console.log('Latest News Module is loaded');
  }
}
