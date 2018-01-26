import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../service/work.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(
    private workService:WorkService
  ) { }

  workArr: Array<any>;
  apiBase: string = environment.apiBase;

  ngOnInit() {
    this.workService.fetchWorkList(1,10)
      .subscribe(data=>{
        this.workArr = data.json().response
      })
  }

}
