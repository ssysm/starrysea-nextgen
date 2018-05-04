import {Component, OnInit} from '@angular/core';
import {WorkService} from "../../service/work.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {MetaService} from "../../service/meta.service";

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
    private meta:MetaService
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
          this.meta.updateTag(data.json().response.name+' - Starry Sea Volunteers Association',data.json().response.summary,environment.apiBase+'/static/work/'+data.json().response.file.cover)
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      });
  }
}
