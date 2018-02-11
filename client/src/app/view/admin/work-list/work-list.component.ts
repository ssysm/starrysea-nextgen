import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../../service/work.service";

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {

  constructor(
    private workService:WorkService
  ) { }
  workArr:Array<any>;
  ngOnInit() {
    this.workService.fetchWorkList(1,999)
      .subscribe(data=>{
        this.workArr = data.json().response
      });
  }

  deleteWork(uid:String){
    this.workService.deleteWork(uid)
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
