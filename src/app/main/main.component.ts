import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public news;

  constructor(private newsApi: NewsService) { 
    this.news = this.newsApi.getNews();
  }

  ngOnInit() {
  }
}
