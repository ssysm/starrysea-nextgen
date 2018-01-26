import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../../service/activity.service";
import {WorkService} from "../../../service/work.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private activityService:ActivityService,
    private workService:WorkService,
  ) { }

  activityArr:Array<any>;
  workArr:Array<any>;

  ngOnInit() {
    this.workService.fetchWorkList(1,99)
      .subscribe(data=>{
        this.workArr = data.json().response
      });
    this.activityService.fetchActivityList(1,99)
      .subscribe(activity=>{
        this.activityArr = activity.json().response
      })
  }

}
