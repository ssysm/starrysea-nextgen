import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $:any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  addUserForm:FormGroup;

  userArr:Array<any>;

  ngOnInit() {
    this.authService.getAllUsers()
      .subscribe(data=>{
        this.userArr = data.json().response
      });
    this.addUserForm = new FormGroup({
      username:new FormControl('',[
        Validators.required
      ]),
      password:new FormControl('',[
        Validators.required
      ])
    })
  }

  deleteUser(uid:String){
    this.authService.deleteUser(uid)
      .subscribe(data=>{
        if(data.json().success){
          alert('删除成功');
          this.authService.getAllUsers()
            .subscribe(user=>{
              this.userArr = user.json().response;
            })
        }else{
          alert('删除失败')
        }
      },error=>{
        alert('删除失败')
      })
  }

  createUser(data){
    this.authService.createAccount(data)
      .subscribe(data=>{
        if(data.json().success){
          alert('添加成功');
          $('#addUser').modal('hide');
          this.authService.getAllUsers()
            .subscribe(user=>{
              this.userArr = user.json().response;
            })
        }else{
          alert('添加失败')
        }
      })
  }

}
