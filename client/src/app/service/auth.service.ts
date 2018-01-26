import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
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
      .post(environment.apiBase+'/users/cretae',cred)
  }

  isLoggedIn(){
    return localStorage.getItem('loggedIn') == 'true';
  }


}
