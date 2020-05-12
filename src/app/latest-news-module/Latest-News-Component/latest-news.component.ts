import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.styl'],
})
export class LatestNewsComponent implements OnInit {
  newsInfo: INews[] = [];

  constructor(private route: Router) {}

  moreInfo(uri:string) {
    window.open(uri, '_blank')
  }

  ngOnInit(): void {}
}
