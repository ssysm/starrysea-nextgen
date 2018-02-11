import { Component, OnInit } from '@angular/core';
import {ActivityService} from "../../../service/activity.service";
declare var swal:any;
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
          swal(
            '删除成功',
            '',
            'success'
          );
          this.activityService.fetchActivityList(1,999)
            .subscribe(data=>{
              this.activityArr = data.json().response
            })
        }else {
          swal(
            '删除失败',
            '',
            'error'
          );
        }
      },error=>{
        swal(
          '删除失败',
          '',
          'error'
        );
      })
  }

}
