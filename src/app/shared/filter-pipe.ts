import { Pipe, PipeTransform } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { Article } from "../models/article"

@Pipe({
  name: "searchArticle"
})
export class FilterPipe implements PipeTransform {
  transform(articles: Article[], filter: string): Article[] {
    if (articles === null) return []
    return articles.filter(article => article.title.indexOf(filter) >= 0)
  }
}
