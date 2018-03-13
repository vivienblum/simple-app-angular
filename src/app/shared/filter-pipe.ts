import { Pipe, PipeTransform } from "@angular/core"
import { Observable } from "rxjs/Observable"
import { switchMap, filter } from "rxjs/operators"
import { Article } from "../models/article"

@Pipe({
  name: "searchArticle"
})
export class FilterPipe implements PipeTransform {
  transform(articles: Article[], filter: string): Article[] {
    console.log(filter)
    if (articles === null) return []

    return articles.filter(article => article.title === "Test")
  }
}
