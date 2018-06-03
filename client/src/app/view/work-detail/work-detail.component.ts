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
  workData:any;
  apiBase:string = environment.apiBase;
  imageArr: Array<any> = [];
  imageIndex: number = 0;
  totalImage: number = 0;

  ngOnInit() {
    this.workId = this.route.snapshot.params['id'];
    this.workService.getWorkDetail(this.workId)
      .subscribe(data=>{
        if(data.json().success){
          this.workData = data.json().response;
          this.meta.updateTag(
            this.workData.name+' - Starry Sea Volunteers Association',
            this.workData.summary,
            environment.apiBase+'/static/work/'+this.workData.file.cover);
          this.totalImage = this.workData.file.images.length-1;
          this.imageArr.push(this.workData.file.images[this.imageIndex]);
        }else{
          this.router.navigate(['/','404'])
        }
      },error=>{
        this.router.navigate(['/','404'])
      });
  }

  pushImg(){
    this.imageIndex++;
    this.imageArr.push(this.workData.file.images[this.imageIndex])
  }

}
