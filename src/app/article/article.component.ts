import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
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
  articleForm: FormGroup

  constructor(private fb: FormBuilder) {}

  handleEdit() {
    this._edit = !this._edit
  }

  edit() {
    return this._edit
  }

  delete() {
    this.deletedArticle.emit(this.article)
  }

  editArticle() {
    const formModel = this.articleForm.value
    const newArticle = {
      id: this.article.id,
      title: formModel.title,
      content: formModel.content,
      author: formModel.author
    }
    this.updatedArticle.emit(newArticle)
  }

  ngOnInit() {
    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      content: [this.article.content, Validators.required],
      author: [this.article.author, Validators.required]
    })
  }
}
