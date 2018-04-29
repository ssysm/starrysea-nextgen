import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkService} from "../../service/work.service";
import {environment} from "../../../environments/environment";
import {MetaService} from "../../service/meta.service";
declare var $:any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {

  constructor(
    private workService:WorkService,
    private meta:MetaService
  ) { }

  workArr: Array<any>;
  apiBase: string = environment.apiBase;
  limit: number = 5;
  page: number = 1;
  loading:Boolean;
  ngOnInit() {
    this.meta.updateTag('Works Gallery - Starry Sea Volunteers Association','All Works from Starry Sea');
    this.workService.fetchWorkList(this.page,this.limit)
      .subscribe(data=>{
        this.workArr = data.json().response
      });
    this.getContent();
  }

  getContent(){
    $(window).scroll(()=>{
      if ($(document).height() - $(window).height() == $(window).scrollTop()) {
        this.loading = true;
        this.page = this.page+1;
        this.workService.fetchWorkList(this.page,this.limit)
          .subscribe(data=>{
            if(data.json().response.length == 0){
              $(window).unbind('scroll')
            }else {
              for (var i = 0; i < data.json().response.length; i++) {
                this.workArr.push(data.json().response[i])
              }
            }
            this.loading = false;
          })
      }
    })
  }
  ngOnDestroy(){
    $(window).unbind('scroll');
  }

}
