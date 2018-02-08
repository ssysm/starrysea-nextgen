import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
    private activityService:ActivityService,
    private metaService:Meta,
    private titleService:Title
  ) { }

  activityArr:Array<any>;
  apiBase:string = environment.apiBase;
  ngOnInit() {
    this.titleService.setTitle('Activities - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Activities - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'All Activities from Starry Sea'}, "property='og:description'");
    this.metaService.updateTag({content: 'All Activities from Starry Sea'}, "name='description'");
    this.activityService.fetchActivityList(1,99)
      .subscribe(data=>{
        this.activityArr = data.json().response
      })
  }

}
