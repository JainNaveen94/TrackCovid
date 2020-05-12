import { Component, OnInit } from '@angular/core';
import { INews } from 'src/app/shared/interfaces/INews.model';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.styl'],
})
export class LatestNewsComponent implements OnInit {
  newsInfo: INews[] = [];

  constructor(private route: Router, private newsService: NewsService) {
    this.getNews();
  }

  moreInfo(uri: string) {
    window.open(uri, '_blank');
  }

  getNews() {
    this.newsService.getNews().subscribe((data) => {
      this.newsInfo = data;
    });
  }

  ngOnInit(): void {}
}
