import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(
    private activityService:ActivityService
  ) { }

  activityArr:Array<any>;
  apiBase:string = environment.apiBase;
  ngOnInit() {
    this.activityService.fetchActivityList(1,99)
      .subscribe(data=>{
        this.activityArr = data.json().response
      })
  }

}
