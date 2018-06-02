import { Injectable } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class AdminGuardService {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    let the_cookie = document.cookie.split(';');
    let token_name = the_cookie[0].split("=")[1];
    if(token_name === "token" || localStorage.getItem('loggedIn') == 'true'){
      return true
    }else{
      this.router.navigate(['/404']);
      return false;
    }

  }

}
