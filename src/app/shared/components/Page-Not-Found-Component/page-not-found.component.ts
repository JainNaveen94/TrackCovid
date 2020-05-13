import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.styl']
})
export class PageNotFoundComponent implements OnInit {

  pageNotFoundIcon: string = "../../../assets/icons/header_icon.webp";
  pageNotFoundTitle: string = "404 - Page not found";
  pageNotFoundSubTitle: string = "STAY HOME. SAVE LIVES";

  constructor() { }

  ngOnInit(): void {
  }

}
