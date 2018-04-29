import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {environment} from "../../../environments/environment";
import {MetaService} from "../../service/meta.service";
declare var $:any;
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit,OnDestroy {

  constructor(
    private activityService:ActivityService,
    private metaService:MetaService
  ) { }

  activityArr:Array<any>;
  apiBase:string = environment.apiBase;

  page:number = 1;
  limit:number = 5;

  loading: Boolean;
  ngOnInit() {
    this.metaService.updateTag('Activities - Starry Sea Volunteers Association','All Activities from Starry Sea');
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
