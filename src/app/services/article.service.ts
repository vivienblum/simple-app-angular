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

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/articles/${id}`)
  }

  public update(article: Article): Observable<any> {
    return this.http.put<Article>(
      `http://localhost:3000/articles/${article.id}`,
      article
    )
  }
}
