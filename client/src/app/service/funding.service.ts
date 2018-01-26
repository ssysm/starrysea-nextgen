import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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


}
