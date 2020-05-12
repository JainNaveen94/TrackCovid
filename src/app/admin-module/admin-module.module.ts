import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminLoginInMemoryDbService } from '../shared/api/admin-login-in-memory-db.service';

import { AdminRoutingModule } from "./router/admin-routing.module";

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    SharedModule,
    AdminRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AdminLoginInMemoryDbService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  exports: [

  ]
})
export class AdminModuleModule {
  constructor() {
    console.log('Admin Module is loaded');
  }
}
