import { Component, OnInit } from '@angular/core';
import {FundingService} from "../../../service/funding.service";
import {ActivityService} from "../../../service/activity.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $:any;
@Component({
  selector: 'app-funding-management',
  templateUrl: './funding-management.component.html',
  styleUrls: ['./funding-management.component.css']
})
export class FundingManagementComponent implements OnInit {

  constructor(
    private activityServicce:ActivityService,
    private fundingService:FundingService
  ) { }

  fundSelectArr:Array<any>;
  fundId:String;
  fundArr:Array<any>;

  fundRecordForm:FormGroup;
  ngOnInit() {
    this.activityServicce.fetchActivityList(1,99)
      .subscribe(activity=>{
        this.fundSelectArr = activity.json().response
      })
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
    this.fundingService.fetchFundingList(this.fundId)
      .subscribe(data=>{
        this.fundArr = data.json().response
      })
  }

  deleteFund(uid:String){
    this.fundingService.deleteFundRecord(uid)
      .subscribe(data=>{
        if(data.json().success){
          alert('删除成功');
          location.reload();
        }else{
          alert('删除失败');
        }
      },error=>{
        alert('删除失败')
      })
  }
  addFund(data){
    this.fundingService.createFundRecord(data)
      .subscribe(data=>{
        this.fundArr.push(data.json().response);
        $('#addFund').modal('hide');
      })
  }

}
