import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class WorkService {

  constructor(
    private http:Http,
  ) { }

  fetchWorkList(page:Number,limit:Number){
    return this.http
      .get(environment.apiBase+'/work?page='+page+'&limit='+limit+'&locale='+environment.locale)
  }

  getWorkDetail(uid:String){
    return this.http
      .get(environment.apiBase+'/work/detail?uid='+uid)
  }

  createWork(data){
    return this.http
      .post(environment.apiBase+'/work',data);
  }

  deleteWork(uid:String){
    return this.http
      .delete(environment.apiBase+'/work/delete',new RequestOptions({
        body: {uid:uid}
      }))
  }


}
