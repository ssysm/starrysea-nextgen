import { Component, OnInit } from '@angular/core';
import {VersionService} from "../../service/version.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private versionService:VersionService
  ) { }

  commit:any;
  Version:string;
  ngOnInit() {
    this.versionService.getLatestCommit()
      .subscribe(data=>{
        if(data.json().success){
          this.commit = data.json().response.commit;
        }else{
          this.commit = "N/A"
        }
      },(error)=>{
        this.commit = "N/A"
      });
    this.versionService.getLatestVersion()
      .subscribe(data=>{
        if(data.json().success){
          this.Version = data.json().response.tag_name
        }else{
          this.Version = "N/A"
        }
      },(error)=>{
        this.Version = "N/A"
      })
  }

}
