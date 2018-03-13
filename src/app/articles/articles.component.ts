import { Component, OnInit } from "@angular/core"
import { Article } from "../models/article"
import { ArticleService } from "../services/article.service"
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs/Observable"

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  private _articles: Observable<Article[]>
  private _articleId: number

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

  articles(): Observable<Article[]> {
    return this._articles
  }

  articleId(): number {
    return this._articleId
  }

  ngOnInit() {
    this._articleId = 0;
    this._articles = this.articleService.getArticles();
    this.route.params.subscribe( params => {
      if (params && params['id']){
        this._articleId = params['id'];
      }
    })
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this._articles = this.articleService.getArticles()
    })
  }

  update(article: Article) {
    this.articleService.update(article).subscribe(() => {
      this._articles = this.articleService.getArticles()
    })
  }
}
