import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private http:Http,
    private titleService: Title,
    private metaService:Meta
  ) { }

  cucuImg:string;
  apiBase:string = environment.apiBase;

  ngOnInit() {
    this.titleService.setTitle('404 Not Found - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: '404 Not Found'}, "property='og:title'");
    this.metaService.updateTag({content: 'Oops, Looks like this page doesn\'t exist'}, "property='og:description'");
    this.metaService.updateTag({content: 'Oops, Looks like this page doesn\'t exist'}, "name='description'");
    this.
      http
        .get(environment.apiBase+'/errorImg',)
      .subscribe(data=>{
        this.cucuImg = data.text();
      })
  }

}
