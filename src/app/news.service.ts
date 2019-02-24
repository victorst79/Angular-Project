import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  public news = [];

  constructor(private http: HttpClient) {
    
    // NEWS IN SPAIN
    this.http.get("https://newsapi.org/v2/everything?q=spain&apiKey=6d27df976d434e2e992f6ce34e4f9989")
    .subscribe(data => {
      var aux = data["articles"];
      for(let i = 0; i <= aux.length-1; i++){
        this.news.push(aux[i]);
      }
    });
  }
  
  // RETURN SPAIN NEWS
  getNews() {
    return this.news;
  }
}
