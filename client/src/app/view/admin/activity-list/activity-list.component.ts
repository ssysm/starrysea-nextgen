import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../../service/activity.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  constructor(
    private activityService:ActivityService
  ) { }
  activityArr:Array<any>;
  ngOnInit() {
    this.activityService.fetchActivityList(1,999)
      .subscribe(activity=>{
        this.activityArr = activity.json().response
      })
  }

  deleteActivity(uid:String){
    this.activityService.deleteActivity(uid)
      .subscribe(data=>{
        if(data.json().success){
          alert('删除成功');
          location.reload();
        }else {
          alert('删除失败');
        }
      },error=>{
        alert('删除失败')
      })
  }

}
