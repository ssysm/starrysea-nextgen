import { Component, OnInit } from '@angular/core';
import {FundingService} from "../../../service/funding.service";
import {ActivityService} from "../../../service/activity.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $:any;
declare var swal:any;
@Component({
  selector: 'app-funding-management',
  templateUrl: './funding-management.component.html',
  styleUrls: ['./funding-management.component.css']
})
export class FundingManagementComponent implements OnInit {

  constructor(
    private activityService:ActivityService,
    private fundingService:FundingService
  ) { }

  fundSelectArr:Array<any>;
  fundId:String;
  fundArr:Array<any>;

  fundRecordForm:FormGroup;
  ngOnInit() {
    this.activityService.fetchActivityList(1,99)
      .subscribe(activity=>{
        this.fundSelectArr = activity.json().response
      });
    this.fundRecordForm = new FormGroup({
      activity_id:new FormControl('',[
        Validators.required
      ]),
      name:new FormControl('',[
        Validators.required
      ]),
      amount:new FormControl('',[
        Validators.required
      ]),
      message:new FormControl('',[])
    })
  }

  updateFundTable(){
    this.fundingService.fetchFundingList(this.fundId,1,999)
      .subscribe(data=>{
        this.fundArr = data.json().response.record
      })
  }

  deleteFund(activity_id,uid:String){
    this.fundingService.deleteFundRecord(activity_id,uid)
      .subscribe(data=>{
        if(data.json().success){
          swal(
            '删除成功',
            '',
            'success'
          );
          this.updateFundTable()
        }else{
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
  addFund(data){
    this.fundingService.createFundRecord(data)
      .subscribe(data=>{
        swal(
          '添加成功',
          '',
          'success'
        );
        this.fundRecordForm.controls.name.reset();
        this.fundRecordForm.controls.amount.reset();
        this.fundRecordForm.controls.message.reset();
        $('#addFund').modal('hide');
        this.updateFundTable()
      })
  }

}
