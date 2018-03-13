import { Component, OnInit } from "@angular/core"
import { Article } from "../models/article"
import { ArticleService } from "../services/article.service"

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  private _articles: Article[]

  constructor(private articleService: ArticleService) {}

  public articles() {
    return this.articleService.getArticles()
  }

  ngOnInit() {}
}
