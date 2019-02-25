import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public news = [];

  constructor(private newsApi: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot['_routerState'].url); 
    var url = this.activatedRoute.snapshot['_routerState'].url;

    // ROUTING CASE
    switch(url) {
      case "/spain":
        this.news = this.newsApi.getSpainNews();
        break;
      case "/uk":
        this.news = this.newsApi.getUkNews();
        break;
      case "/france":
        this.news = this.newsApi.getFranceNews();
        break; 
      default:
        this.news = this.newsApi.getSpainNews();
    } 
  }
}
