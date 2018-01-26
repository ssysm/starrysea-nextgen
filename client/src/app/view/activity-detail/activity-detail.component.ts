import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FundingService} from "../../service/funding.service";
import {environment} from "../../../environments/environment";

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
    private router:Router
  ) { }

  activityId:string;
  activityData:Object;
  apiBase:string = environment.apiBase;
  fundArr:Array<any>;
  ngOnInit() {
    this.activityId = this.route.snapshot.params['id'];
    this.activityService.getActivity(this.activityId)
      .subscribe(data=>{
        if(data.json().success){
          this.activityData = data.json().response;
          this.fundingService.fetchFundingList(this.activityId)
            .subscribe(funding=>{
              this.fundArr = funding.json().response
            })
        }else{
          this.router.navigate(['/404'])
        }
      },error=>{
        this.router.navigate(['/404'])
      })
  }

}
