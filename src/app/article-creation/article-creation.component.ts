import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { ArticleService } from "../services/article.service"
import { Article } from "../models/article"

@Component({
  selector: "app-article-creation",
  templateUrl: "./article-creation.component.html",
  styleUrls: ["./article-creation.component.css"]
})
export class ArticleCreationComponent implements OnInit {
  articleForm: FormGroup
  private edit: boolean = false

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.articleForm = this.fb.group({
      title: ["", Validators.required],
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
      this.router.navigate(['articles'])
    })
  }

  ngOnInit() {}
}
