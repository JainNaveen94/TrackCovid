import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LatestNewsComponent } from "../Latest-News-Component/latest-news.component";
import { LatestNewsModuleComponent } from "../latest-news-module.component";


export const latestNewsRoutes: Routes = [
  {path: '', component: LatestNewsComponent}
];

@NgModule({
  declarations: [
    LatestNewsModuleComponent
  ],
  imports: [RouterModule],
  exports: [RouterModule]
})
export class LatestNewsRoutingModule {
  constructor() {
    console.log("Latest News Routing Module Loaded");
  }
}
