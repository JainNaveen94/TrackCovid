import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecautionComponent } from "../Precaution-Component/precaution.component";
import { PrecautionModuleComponent } from "../precaution-module.component";

export const precautionRoutes: Routes = [
  {path: '', component: PrecautionComponent}
];

@NgModule({
  declarations: [
    PrecautionModuleComponent
  ],
  imports: [RouterModule],
  exports: [RouterModule]
})
export class PrecautionRoutingModule {
  constructor() {
    console.log("Precaution Routing Module Loaded");
  }
}
