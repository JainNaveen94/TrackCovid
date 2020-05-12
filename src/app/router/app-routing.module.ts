import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModuleComponent } from "../admin-module/admin-module.component";
import { LatestNewsModuleComponent } from "../latest-news-module/latest-news-module.component";
import { DashboardModuleComponent } from "../dashboard-module/dashboard-module.component";
import { PrecautionModuleComponent } from "../precaution-module/precaution-module.component";

import { AdminRoutingModule,  adminRoutes} from "../admin-module/router/admin-routing.module";
import { LatestNewsRoutingModule, latestNewsRoutes } from "../latest-news-module/router/latestnews-routing.module";
import { DashboardRoutingModule, dashboardRoutes } from "../dashboard-module/router/dashboard-routing.module";
import { PrecautionRoutingModule, precautionRoutes } from "../precaution-module/router/precaution-routing.module";


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard', component: DashboardModuleComponent, children:[...dashboardRoutes]},
  {path:'login', component: AdminModuleComponent, children:[...adminRoutes]},
  {path:'news', component: LatestNewsModuleComponent, children:[...latestNewsRoutes]},
  {path:'precaution', component: PrecautionModuleComponent, children:[...precautionRoutes]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log("App Routing Module Loaded");
  }
}
