import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from "@angular/forms"
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from "./app.component"
import { ArticleComponent } from "./article/article.component"
import { ArticlesComponent } from "./articles/articles.component"
import { ArticleService } from "./services/article.service"

import { ArticleCreationComponent } from "./article-creation/article-creation.component";
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "articles/:id", component: ArticlesComponent },
  { path: "", component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
