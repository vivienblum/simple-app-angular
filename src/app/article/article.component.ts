import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { Article } from "../models/article"

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  @Input() article: Article

  @Output() deletedArticle: EventEmitter<Article> = new EventEmitter()
  @Output() updatedArticle: EventEmitter<Article> = new EventEmitter()

  private _edit : boolean = false

  constructor() {}

  handleEdit() {
    this._edit = !this._edit
  }

  edit() {
    return this._edit
  }

  delete() {
    this.deletedArticle.emit(this.article)
  }

  update() {
    this.updatedArticle.emit(this.article)
  }

  setTitle(title:string) {
    console.log(title)
  }

  ngOnInit() {}
}
