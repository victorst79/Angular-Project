import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  public spainNews = [];
  public ukNews = [];
  public franceNews = [];

  constructor(private http: HttpClient) {
    
    // NEWS IN SPAIN
    this.http.get("https://newsapi.org/v2/everything?q=spain&apiKey=6d27df976d434e2e992f6ce34e4f9989")
    .subscribe(data => {
       this.spainNews = (data["articles"]);
    });

    // NEWS IN UK
    this.http.get("https://newsapi.org/v2/everything?q=uk&apiKey=6d27df976d434e2e992f6ce34e4f9989")
    .subscribe(data => {
       this.ukNews = (data["articles"]);
    });

    // NEWS IN FRANCE
    this.http.get("https://newsapi.org/v2/everything?q=france&apiKey=6d27df976d434e2e992f6ce34e4f9989")
    .subscribe(data => {
       this.franceNews = (data["articles"]);
    });
  }
  
  // RETURN SPAIN NEWS
  getSpainNews() {
    return this.spainNews;
  }

  // RETURN UK NEWS
  getUkNews() {
    return this.ukNews;
  }

  // RETURN FRANCE NEWS
  getFranceNews() {
    return this.franceNews;
  }
}
