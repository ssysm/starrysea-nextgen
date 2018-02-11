import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../../service/work.service";
declare var swal:any;
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
          swal(
            '删除成功',
            '',
            'success'
          );
          this.workService.fetchWorkList(1,999)
            .subscribe(data=>{
              this.workArr = data.json().response
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
