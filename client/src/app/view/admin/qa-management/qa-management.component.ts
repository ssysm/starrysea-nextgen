import { Component, OnInit } from '@angular/core';
import {QaService} from "../../../service/qa.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var jQuery:any;
declare var swal:any;
@Component({
  selector: 'app-qa-management',
  templateUrl: './qa-management.component.html',
  styleUrls: ['./qa-management.component.css']
})
export class QaManagementComponent implements OnInit {

  constructor(
    private qaService:QaService
  ) { }

  qaList:Array<any>;
  cQaId:string;

  qaAnswerForm:FormGroup;

  ngOnInit() {
    this.qaService.fetchAllQaList(1,999)
      .subscribe(data=>{
        this.qaList = data.json().response;
      });
    this.qaAnswerForm = new FormGroup({
      uid:new FormControl('',[
        Validators.required
      ]),
      answer:new FormControl('',[
        Validators.required
      ])
    })
  }

  answerQa(data){
    this.qaService.answerQa(data)
      .subscribe(data=>{
        this.qaAnswerForm.reset();
        jQuery('#qaAnswerBox').modal('hide');
        swal(
          '回复成功',
          '',
          'success'
        );
        this.qaService.fetchAllQaList(1,999)
          .subscribe(data=>{
            this.qaList = data.json().response;
          });
      },error=>{
        swal(
          '回复失败',
          '无法回复',
          'error'
        )
      })
  }

  deleteQa(uid){
    this.qaService.deleteQa(uid)
      .subscribe(data=>{
        if(data.json().success){
          swal(
            '删除成功',
            '',
            'success'
          );
          this.qaService.fetchAllQaList(1,999)
            .subscribe(data=>{
              this.qaList = data.json().response;
            });
        }else{
          swal(
            '错误',
            '无法删除',
            'error'
          )
        }
      },error=>{
        swal(
          '错误',
          '无法删除',
          'error'
        )
      })
  }

}
