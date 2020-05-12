import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import { INews } from 'src/app/shared/interfaces/INews.model';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.styl']
})
export class AddNewsComponent implements OnInit {

  newsForm: FormGroup;
  news: INews;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private toasterService: ToastrService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      uri: ['']
    });
  }

  resetForm() {
    this.newsForm.reset();
  }

  addNews(newsData:INews) {
    console.log(JSON.stringify(newsData));
    this.newsService.addNews(newsData).subscribe( data => {
      console.log("HIT Successfully Done", data);
    });
    this.toasterService.success('news added successfully!');
    this.route.navigate(['/news']);
  }



}
