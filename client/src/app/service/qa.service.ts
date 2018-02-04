import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class QaService {

  constructor(
    private http:Http
  ) { }

  fetchQaList(page:number,limit:number){
    return this.http
      .get(environment.apiBase+'/qa?page='+page+'&limit='+limit)
  }

  createQa(data){
    return this.http
      .post(environment.apiBase+'/qa/ask',data)
  }

  fetchAllQaList(page:number,limit:number){
    return this.http
      .get(environment.apiBase+'/qa/all?page='+page+'&limit='+limit)
  }

  answerQa(data){
    return this.http
      .patch(environment.apiBase+'/qa/answer',data)
  }

  deleteQa(uid:String){
    return this.http
      .delete(environment.apiBase+'/qa/delete',new RequestOptions({
        body: {uid:uid}
      }))
  }

}
