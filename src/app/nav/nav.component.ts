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
    if (this.route.url && this.route.url.value && this.route.url.value.length > 0 && this.route.url.value[0].path){
      this._url = this.route.url.value[0].path;
    }
  }

  url(): string {
    return this._url;
  }

}
