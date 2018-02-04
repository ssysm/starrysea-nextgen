import { Component, OnInit } from '@angular/core';
import {QaService} from "../../service/qa.service";
declare var swal:any;
@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor(
    private qaService:QaService
  ) { }

  QaList:Array<any>;
  question:String;
  ngOnInit() {
    this.qaService.fetchQaList(1,99)
      .subscribe(data=>{
        this.QaList = data.json().response;
      })
  }

  askQuestion() {
    if (this.question) {
      this.qaService.createQa({question: this.question})
        .subscribe(data => {
          if (data.json().success) {
            swal(
              'Success',
              'Your message has been sent',
              'success'
            );
            this.question = null;
          } else {
            swal(
              'Error',
              'Something went wrong',
              'error'
            )
          }
        }, error => {
          swal(
            'Error',
            'Something went wrong',
            'error'
          )
        })
    }else{
      return false;
    }
  }
}
