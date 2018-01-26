import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
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

  createActivity(data){
    return this.http
      .post(environment.apiBase+'/activity',data);
  }

  deleteActivity(uid:String){
    return this.http
      .delete(environment.apiBase+'/activity/delete',new RequestOptions({
        body: {uid:uid}
      }))
  }

}
