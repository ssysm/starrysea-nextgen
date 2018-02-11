import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  constructor(
    private http:Http
  ) { }

  login(cred){
    return this.http
      .post(environment.apiBase+'/users/login',cred)
  }

  createAccount(cred){
    return this.http
      .post(environment.apiBase+'/users/create',cred)
  }

  getAllUsers(){
    return this.http
      .get(environment.apiBase+'/users/all')
  }

  deleteUser(uid:String){
    return this.http
      .delete(environment.apiBase+'/users/delete',new RequestOptions({
        body: {uid}
      }))
  }

  getLoginStatus(){
    return this.http
      .get(environment.apiBase+'/users/status');
  }

}
