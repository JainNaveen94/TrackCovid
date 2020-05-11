import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminLoginInMemoryDbService } from '../shared/api/admin-login-in-memory-db.service';

import { AdminLoginComponent } from './Admin-Login-Component/admin-login/admin-login.component';
import { AddNewsComponent } from './Add-Newz-Component/add-news/add-news.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminLoginComponent, AddNewsComponent],
  imports: [
    CommonModule,
    SharedModule,
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
