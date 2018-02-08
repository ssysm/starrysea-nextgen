import { Component, OnInit } from '@angular/core';
import {VersionService} from "../../service/version.service";
import {Meta,Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private versionService:VersionService,
    private titleService:Title,
    private metaService:Meta
  ) { }

  commit:any;
  Version:string;
  ngOnInit() {
    this.titleService.setTitle('About Us - Starry Sea Volunteers Association');
    this.metaService.updateTag({content:'/assets/icons/starrysea-512x512.png'}, "property='og:image'");
    this.metaService.updateTag({content: 'About Us - Starry Sea Volunteers Association'}, "property='og:title'");
    this.metaService.updateTag({content: 'About Starry Sea Volunteers Association'}, "property='og:description'");
    this.metaService.updateTag({content: 'About Starry Sea Volunteers Association'}, "name='description'");
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
