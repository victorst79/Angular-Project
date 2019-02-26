import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  public news = [];

  constructor(private http: HttpClient) { }
  // RETURN SPAIN NEWS
  getSpainNews() {
    this.http.get('https://newsapi.org/v2/everything?q=spain&apiKey=6d27df976d434e2e992f6ce34e4f9989')
    .subscribe(data => {
       this.news = (data['articles']);
    });
  }

  // RETURN UK NEWS
  getUkNews() {
    this.http.get('https://newsapi.org/v2/everything?q=uk&apiKey=6d27df976d434e2e992f6ce34e4f9989')
    .subscribe(data => {
       this.news = (data['articles']);
    });
  }

  // RETURN FRANCE NEWS
  getFranceNews() {
    this.http.get('https://newsapi.org/v2/everything?q=france&apiKey=6d27df976d434e2e992f6ce34e4f9989')
    .subscribe(data => {
       this.news = (data['articles']);
    });
  }
}
