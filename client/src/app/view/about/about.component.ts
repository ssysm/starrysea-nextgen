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
  }

}
