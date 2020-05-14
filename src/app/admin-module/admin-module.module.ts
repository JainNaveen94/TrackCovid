import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLoginComponent } from "../admin-module/Admin-Login-Component/admin-login/admin-login.component";
import { AddNewsComponent } from "../admin-module/Add-Newz-Component/add-news/add-news.component";

import { SharedModule } from '../core/shared.module';

@NgModule({
  declarations: [AdminLoginComponent, AddNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    AdminLoginComponent,
    AddNewsComponent,
  ]
})
export class AdminModuleModule {
  constructor() {
    console.log('Admin Module is loaded');
  }
}
