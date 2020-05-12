import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "../Dashboard-Component/dashboard.component";
import { DashboardModuleComponent } from "../dashboard-module.component";

export const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [
    DashboardModuleComponent
  ],
  imports: [RouterModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  constructor() {
    console.log("Admin Routing Module Loaded");
  }
}
