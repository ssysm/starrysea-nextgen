import { Injectable } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AdminGuardService {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  canActivate(){
   if(this.authService.isLoggedIn()){
     return true;
   }else {
     this.router.navigate(['/']);
     return false;
   }
  }

}
