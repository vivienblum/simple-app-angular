import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private _url : string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url && url.length > 0 && url[0].path){
        this._url = url[0].path;
      }
    });
  }

  url(): string {
    return this._url;
  }

}
