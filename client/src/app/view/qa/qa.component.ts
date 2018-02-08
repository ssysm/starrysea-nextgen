import { Component, OnInit } from '@angular/core';
import {QaService} from "../../service/qa.service";
import {Meta, Title} from "@angular/platform-browser";
declare var swal:any;
@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit {

  constructor(
    private qaService:QaService,
    private titleService:Title,
    private metaService:Meta
  ) { }

  QaList:Array<any>;
  question:String;
  ngOnInit() {
    this.qaService.fetchQaList(1,99)
      .subscribe(data=>{
        this.QaList = data.json().response;
      })
    this.titleService.setTitle('Question & Answer - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Question & Answer - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'Question & Answer from Starry Sea'}, "property='og:description'");
    this.metaService.updateTag({content: 'Question & Answer from Starry Sea'}, "name='description'");
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
