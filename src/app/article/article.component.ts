import { Component, OnInit, Input } from "@angular/core"

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input("title") _title: string
  @Input("content") _content: string
  @Input("author") _author: string

  constructor() {}

  public title(): string {
    return this._title
  }

  public content(): string {
    return this._content
  }

  public author(): string {
    return this._author
  }

  ngOnInit() {}
}
