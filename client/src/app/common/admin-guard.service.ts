import { Injectable } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AdminGuardService {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    let the_cookie = document.cookie.split(';');
    let token = the_cookie[0].split("=")[1];
    if(token){
      return true
    }else{
      this.router.navigate(['/']);
      return false;
    }

  }

}
