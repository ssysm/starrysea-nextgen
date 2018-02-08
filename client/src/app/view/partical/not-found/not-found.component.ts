import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private http:Http
  ) { }

  cucuImg:string;

  ngOnInit() {
    this.
      http
        .get(environment.apiBase+'/errorImg',)
      .subscribe(data=>{
        this.cucuImg = data.text();
      })

  }

}
