import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModuleModule } from '../admin-module/admin-module.module';
import { AdminModuleComponent } from "../admin-module/admin-module.component";

import { AdminRoutingModule,  adminRoutes} from "../admin-module/router/admin-routing.module";


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch:'full'},
  {path:'login', component: AdminModuleComponent, children:[...adminRoutes]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminModuleModule
  ],
  exports: [
    RouterModule,
    AdminModuleModule
  ]
})
export class AppRoutingModule {
  constructor() {
    console.log("App Routing Module Loaded");
  }
}
