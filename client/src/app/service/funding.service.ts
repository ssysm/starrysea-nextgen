import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class FundingService {

  constructor(
    private http:Http
  ) { }

  fetchFundingList(uid:String){
    return this.http
      .get(environment.apiBase+'/funding/activity?activity_id='+uid)
  }

  createFundRecord(data){
    return this.http
      .post(environment.apiBase+'/funding/create',data)
  }

  deleteFundRecord(activity_id,uid:String){
    return this.http
        .delete(environment.apiBase+'/funding/delete',new RequestOptions({
      body: {activity_id:activity_id,uid:uid}
    }))
  }

}
