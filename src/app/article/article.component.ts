import { Component, OnInit, Input } from "@angular/core"
import { Article } from "../models/article"

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() article: Article

  constructor() {}

  // public title(): string {
  //   return this._title
  // }
  //
  // public content(): string {
  //   return this._content
  // }
  //
  // public author(): string {
  //   return this._author
  // }

  ngOnInit() {}
}
