import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class FundingService {

  constructor(
    private http:Http
  ) { }
  /**
   * Get All Funding List
   * @param {String} uid Activity UID
   * @param {Number} page Page Number
   * @param {Number} limit result per page
   * */
  fetchFundingList(uid:String,page:Number,limit:Number){
    return this.http
      .get(environment.apiBase+'/funding/activity?activity_id='+uid+'&page='+page+'&limit='+limit)
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
