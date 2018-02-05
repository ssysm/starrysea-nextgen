import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../service/work.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {

  constructor(
    private workService:WorkService,
    private route:ActivatedRoute,
    private router:Router
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
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      })
  }

}
