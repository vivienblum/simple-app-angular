import { Injectable } from "@angular/core"
import { Article } from "../models/article"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable"

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles")
  }
}
