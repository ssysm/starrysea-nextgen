import { Injectable } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Injectable()
export class AdminGuardService {

  constructor(
    private authService:AuthService
  ) { }

  canActivate(){
    return this.authService.isLoggedIn();
  }

}
