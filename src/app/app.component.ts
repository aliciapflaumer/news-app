import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

// Defining two properties as arrays: Articles and Sources
  mArticles:Array<any>;
  mSources:Array<any>;

// Creating a NewsAPIService instance
  constructor(private newsapi:NewsApiService){
    console.log('app component constructor called');
  }

// Using that instance on the ngOnInit() function to initialize the two properties
  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
    }


// This will be triggered whenever the user selects a specific resource from the left-side menu
// Passing this parameter to the getArticlesByID function to retrieve articles
  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
