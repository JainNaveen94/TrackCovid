import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from '../admin-module/Admin-Login-Component/admin-login/admin-login.component';
import { AdminModuleModule } from '../admin-module/admin-module.module';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'login', component: AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModuleModule],
  exports: [RouterModule, AdminModuleModule]
})
export class AppRoutingModule {
  constructor() {
    console.log("App Routing Module Loaded");
  }
 }
