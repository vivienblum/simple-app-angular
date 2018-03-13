import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  private _title: string
  private _content: string
  private _author: string

  constructor() {
    this._title = "First Article"
    this._content = "Hello World"
    this._author = "Vivien"
  }

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
