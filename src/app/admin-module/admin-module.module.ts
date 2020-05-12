import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLoginComponent } from "../admin-module/Admin-Login-Component/admin-login/admin-login.component";
import { AddNewsComponent } from "../admin-module/Add-Newz-Component/add-news/add-news.component";

// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { AdminLoginInMemoryDbService } from '../shared/api/admin-login-in-memory-db.service';

// import { AdminRoutingModule } from "./router/admin-routing.module";

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminLoginComponent, AddNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(AdminLoginInMemoryDbService, {
    //   dataEncapsulation: false,
    //   passThruUnknownUrl: true,
    // }),
  ],
  exports: [
    AdminLoginComponent,
    AddNewsComponent,
    // HttpClientModule,
    // HttpClientInMemoryWebApiModule
  ]
})
export class AdminModuleModule {
  constructor() {
    console.log('Admin Module is loaded');
  }
}
