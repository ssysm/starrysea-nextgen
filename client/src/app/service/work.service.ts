import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class WorkService {

  constructor(
    private http:Http
  ) { }

  fetchWorkList(page:Number,limit:Number){
    return this.http
      .get(environment.apiBase+'/work?page='+page+'&limit='+limit)
  }

  getWorkDetail(uid:String){
    return this.http
      .get(environment.apiBase+'/work/detail?uid='+uid)
  }


}
