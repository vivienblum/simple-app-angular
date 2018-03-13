import { Component, OnInit, Output, EventEmitter } from "@angular/core"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ArticleService } from "../services/article.service"
import { Article } from "../models/article"

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html",
  styleUrls: ["./article-creation.component.css"]
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup
  @Output() addedArticle: EventEmitter<Article> = new EventEmitter()

  constructor(private fb: FormBuilder, private articleService: ArticleService) {
    this.articleForm = this.fb.group({
      title: ["Fake title", Validators.required],
      content: ["", Validators.required],
      author: ["", Validators.required]
    })
  }

  createArticle() {
    const formModel = this.articleForm.value
    const newArticle = {
      title: formModel.title,
      content: formModel.content,
      author: formModel.author
    }
    this.articleService.add(newArticle).subscribe((article)=>{
      this.addedArticle.emit(article)
    })
  }

  ngOnInit() {}
}
