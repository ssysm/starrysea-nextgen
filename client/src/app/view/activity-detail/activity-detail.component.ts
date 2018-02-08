import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FundingService} from "../../service/funding.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  constructor(
    private activityService:ActivityService,
    private fundingService:FundingService,
    private route:ActivatedRoute,
    private router:Router,
    private metaService:Meta,
    private titleService:Title
  ) { }

  activityId:string;
  activityData:Object;
  apiBase:string = environment.apiBase;
  fundArr:Array<any>;
  content:String;
  ngOnInit() {
    this.activityId = this.route.snapshot.params['id'];
    this.activityService.getActivity(this.activityId)
      .subscribe(data=>{
        if(data.json().success){
          this.activityData = data.json().response;
          this.content = data.json().response.content.replace(/\n/g, "<br/>");
          this.titleService.setTitle(data.json().response.name+' - Starry Sea Volunteers Association');
          this.metaService.updateTag({content: environment.apiBase+'/static/activity/'+data.json().response.cover}, "property='og:image'");
          this.metaService.updateTag({content: data.json().response.name+' - Starry Sea Volunteers Association'}, "property='og:title'");
          this.metaService.updateTag({content: data.json().response.summary}, "property='og:description'");
          this.metaService.updateTag({content: data.json().response.summary}, "name='description'");
          this.fundingService.fetchFundingList(this.activityId)
            .subscribe(funding=>{
              this.fundArr = funding.json().response.record;
            })
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      })
  }

}
