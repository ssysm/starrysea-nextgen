import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
  }

  login(cred){
    this.authService.login(cred)
      .subscribe(data=>{
        localStorage.setItem('loggedIn','true');
        this.router.navigate(['/','admin']);
      },error=>{
        alert('密码或用户名错误');
      })
  }

}
