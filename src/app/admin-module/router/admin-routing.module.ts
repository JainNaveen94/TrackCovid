import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLoginComponent } from '../Admin-Login-Component/admin-login/admin-login.component';
import { AddNewsComponent } from '../Add-Newz-Component/add-news/add-news.component';
import { AdminModuleComponent } from "../admin-module.component";

import { AddNewsCanActivateGuard } from '../guards/add-news-can-activate.guard';
import { LoginCanActivateGuard } from "../guards/login-can-activate.guard";


export const adminRoutes: Routes = [
  {path: '', component: AdminLoginComponent, canActivate:[LoginCanActivateGuard]},
  {path: 'add-news', component: AddNewsComponent,canActivate:[AddNewsCanActivateGuard]},
];

@NgModule({
  declarations: [
    AdminModuleComponent
  ],
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  constructor() {
    console.log("Admin Routing Module Loaded");
  }
}
