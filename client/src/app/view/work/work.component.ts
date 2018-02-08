import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../service/work.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(
    private workService:WorkService,
    private titleService:Title,
    private metaService:Meta
  ) { }

  workArr: Array<any>;
  apiBase: string = environment.apiBase;

  ngOnInit() {
    this.titleService.setTitle('Works Gallery - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Work Gallery - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'All Works from Starry Sea'}, "property='og:description'");
    this.metaService.updateTag({content: 'All Works from Starry Sea'}, "name='description'");
    this.workService.fetchWorkList(1,99)
      .subscribe(data=>{
        this.workArr = data.json().response
      })
  }

}
