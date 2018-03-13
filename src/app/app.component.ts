import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from "./models/article"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @Output() refreshArticle: EventEmitter<Article> = new EventEmitter()

  addArticle(article: Article) {
    console.log(article)
    this.refreshArticle.emit(article)
  }
}
