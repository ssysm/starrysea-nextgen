import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";
declare var $:any;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit,OnDestroy {

  constructor(
    private activityService:ActivityService,
    private metaService:Meta,
    private titleService:Title
  ) { }

  activityArr:Array<any>;
  apiBase:string = environment.apiBase;

  page:number = 1;
  limit:number = 5;

  loading: Boolean;
  ngOnInit() {
    this.titleService.setTitle('Activities - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Activities - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'All Activities from Starry Sea'}, "property='og:description'");
    this.metaService.updateTag({content: 'All Activities from Starry Sea'}, "name='description'");
    this.activityService.fetchActivityList(this.page,this.limit)
      .subscribe(data=>{
        this.activityArr = data.json().response
      });
    this.getContent();
  }

  getContent(){
    $(window).scroll(()=>{
      if ($(document).height() - $(window).height() == $(window).scrollTop()) {
        this.loading = true;
        this.page = this.page+1;
        this.activityService.fetchActivityList(this.page,this.limit)
          .subscribe(data=>{
            if(data.json().response.length == 0){
              $(window).unbind('scroll')
            }else {
              for (var i = 0; i < data.json().response.length; i++) {
                this.activityArr.push(data.json().response[i])
              }
            }
            this.loading = false;
          })
      }
    })
  }

  ngOnDestroy(){
    $(window).unbind('scroll');
  }

}
