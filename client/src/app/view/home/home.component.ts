import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService:Title,
    private metaService:Meta
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: ''}, "property='og:description'");
    this.metaService.updateTag({content: 'We Are Starry Sea Volunteers Association'}, "name='description'");
  }

}
