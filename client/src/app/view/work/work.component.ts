import {Component, OnDestroy, OnInit} from '@angular/core';
import {WorkService} from "../../service/work.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";
declare var $:any;

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {

  constructor(
    private workService:WorkService,
    private titleService:Title,
    private metaService:Meta
  ) { }

  workArr: Array<any>;
  apiBase: string = environment.apiBase;
  limit: number = 5;
  page: number = 1;
  loading:Boolean;
  ngOnInit() {
    this.titleService.setTitle('Works Gallery - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'Work Gallery - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'All Works from Starry Sea'}, "property='og:description'");
    this.metaService.updateTag({content: 'All Works from Starry Sea'}, "name='description'");
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
