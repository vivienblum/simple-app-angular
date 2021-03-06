import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Article } from "../models/article"
import { ArticleService } from "../services/article.service"
import { ActivatedRoute } from "@angular/router"
import { Observable } from "rxjs/Observable"

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  private _articles: Observable<Article[]>
  private _articleId: number
  searchForm: FormGroup

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: [""]
    })
  }

  articles(): Observable<Article[]> {
    return this._articles
  }

  getSearch(): string {
    return this.searchForm.value.search
  }

  articleId(): number {
    return this._articleId
  }

  ngOnInit() {
    this._articleId = 0
    this._articles = this.articleService.getArticles()
    this.route.params.subscribe(params => {
      if (params && params["id"]) {
        this._articleId = params["id"]
      }
    })
  }

  delete(article: Article) {
    this.articleService.delete(article.id).subscribe(() => {
      this._articles = this.articleService.getArticles()
    })
  }

  update(article: any) {
    this.articleService.update(article).subscribe(() => {
      this._articles = this.articleService.getArticles()
    })
  }
}
