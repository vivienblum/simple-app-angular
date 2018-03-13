import { Component, OnInit } from "@angular/core"
import { Article } from "../models/article"

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.css"]
})
export class ArticlesComponent implements OnInit {
  private _articles: Article[]

  constructor() {
    this._articles = [
      { title: "toto", content: "tto", author: "" },
      { title: "toto", content: "tto", author: "" }
    ]
  }

  public articles() {
    return this._articles
  }

  ngOnInit() {}
}
