import {AfterContentInit, AfterViewChecked, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivityService} from "../../service/activity.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FundingService} from "../../service/funding.service";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";
declare var $:any;
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit,OnDestroy,AfterViewChecked {

  constructor(
    private activityService:ActivityService,
    private fundingService:FundingService,
    private route:ActivatedRoute,
    private router:Router,
    private metaService:Meta,
    private titleService:Title
  ) { }

  activityId:string;
  activityData:Object;
  apiBase:string = environment.apiBase;
  fundArr:Array<any>;
  content:String;

  page:number = 1;
  limit:number = 999;

  loading: Boolean;

  ngOnInit() {
    this.activityId = this.route.snapshot.params['id'];
    this.activityService.getActivity(this.activityId)
      .subscribe(data=>{
        if(data.json().success){
          this.activityData = data.json().response;
          this.content = data.json().response.content.replace(/\n/g, "<br/>");
          this.titleService.setTitle(data.json().response.name+' - Starry Sea Volunteers Association');
          this.metaService.updateTag({content: environment.apiBase+'/static/activity/'+data.json().response.cover}, "property='og:image'");
          this.metaService.updateTag({content: data.json().response.name+' - Starry Sea Volunteers Association'}, "property='og:title'");
          this.metaService.updateTag({content: data.json().response.summary}, "property='og:description'");
          this.metaService.updateTag({content: data.json().response.summary}, "name='description'");
          this.fundingService.fetchFundingList(this.activityId,this.page,this.limit)
            .subscribe(funding=>{
              this.fundArr = funding.json().response.record;
            });
          this.getContent();
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      })
  }

  ngAfterViewChecked(): void {

    if ( this._tableLoaded() ) {
      this.fundTableScroll();
    }
  }

    _tableLoaded(): boolean {
      var $el = $(".fundingTable");
    return $el.length > 0;
  }

  getContent(){
    $(window).scroll(()=>{
      if ($(document).height() - $(window).height() == $(window).scrollTop()) {
        this.loading = true;
        this.page = this.page+1;
        this.fundingService.fetchFundingList(this.activityId,this.page,this.limit)
          .subscribe(data=>{
            if(data.json().response.record.length == 0){
              $(window).unbind('scroll')
            }else {
              for (var i = 0; i < data.json().response.record.length; i++) {
                this.fundArr.push(data.json().response.record[i])
              }
            }
            this.loading = false;
          })
      }
    })
  }

  fundTableScroll(){
    var $el = $(".fundingTable");
    function anim() {
      var st = $el.scrollTop();
      var sb = $el.prop("scrollHeight")-$el.innerHeight();
      $el.animate({scrollTop: st<sb/2 ? sb : 0}, 75000, "linear", anim);
    }
    function stop(){
      $el.stop();
    }
    anim();
    $el.hover(stop, anim);
  }

  ngOnDestroy(){
    $(window).unbind('scroll');
  }

}
