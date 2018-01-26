import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ActivityService {

  constructor(
    private http:Http
  ) { }

  fetchActivityList(page:Number,limit:Number){
    return this.http
      .get(environment.apiBase+'/activity?page='+page+'&limit='+limit)
  }

  getActivity(uid:String){
    return this.http
      .get(environment.apiBase+'/activity/detail?uid='+uid)
  }

}
