import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component"
import { ArticleComponent } from "./article/article.component"
import { ArticlesComponent } from "./articles/articles.component"
import { ArticleService } from "./services/article.service";

const appRoutes: Routes = [
/*  { path: 'create', component: ArticleCreationComponent },*/
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: '', component: ArticlesComponent }
]

@NgModule({
  declarations: [AppComponent, ArticleComponent, ArticlesComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
