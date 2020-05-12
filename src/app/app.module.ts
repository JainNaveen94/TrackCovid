import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/Header-Component/header/header.component';

import { AdminModuleModule } from './admin-module/admin-module.module';
import { LatestNewsModule } from "./latest-news-module/latest-news.module";
import { DashboardModule } from "./dashboard-module/dashboard.module";
import { PrecautionModule } from "./precaution-module/precaution.module";

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ApiInMemoryDbService } from "./shared/api/api-in-memory-db.service";

import { NewsService } from "./services/news/news.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AdminModuleModule,
    LatestNewsModule,
    DashboardModule,
    PrecautionModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiInMemoryDbService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("App Module loaded.");
  }
}
