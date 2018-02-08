import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../service/work.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  constructor(
    private workService:WorkService,
    private route:ActivatedRoute,
    private router:Router,
    private titleService:Title,
    private metaService:Meta
  ) { }

  workId:string;
  workData:Object;
  apiBase:string = environment.apiBase;
  content:String;
  ngOnInit() {
    this.workId = this.route.snapshot.params['id'];
    this.workService.getWorkDetail(this.workId)
      .subscribe(data=>{
        if(data.json().success){
          this.workData = data.json().response;
          this.titleService.setTitle(data.json().response.name+' - Starry Sea Volunteers Association');
          this.metaService.updateTag({content: environment.apiBase+'/static/work/'+data.json().response.file.cover}, "property='og:image'");
          this.metaService.updateTag({content: data.json().response.name+' - Starry Sea Volunteers Association'}, "property='og:title'");
          this.metaService.updateTag({content: data.json().response.summary}, "property='og:description'");
          this.metaService.updateTag({content: data.json().response.summary}, "name='description'");
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      })
  }

}
