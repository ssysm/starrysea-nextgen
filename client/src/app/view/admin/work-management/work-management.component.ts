import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../../service/work.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
declare var $: any;
@Component({
  selector: 'app-work-management',
  templateUrl: './work-management.component.html',
  styleUrls: ['./work-management.component.css']
})
export class WorkManagementComponent implements OnInit {

  constructor(
    private workService:WorkService
  ) { }

  workForm:FormGroup;

  pdf:File;
  cover:File;
  images:Array<File>;
  ngOnInit() {
    this.workForm = new FormGroup({
      name: new FormControl('',
        Validators.required
      ),
      summary: new FormControl('',
        Validators.required
      )
    })
  }

  fileImageChangeEvent(fileInput: any) {
    this.images = <Array<File>>fileInput.target.files;
  }
  filePDFChange(files: any){
    this.pdf = files[0];
  }
  fileCoverChange(files:any){
    this.cover = files[0];
  }

  private prepare() {
    const formData: any = new FormData();
    const files: Array<File> = this.images;
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i], files[i]['name']);
    }
    formData.append("pdf", this.pdf);
    formData.append('cover', this.cover);
    formData.append('name', this.workForm.get('name').value);
    formData.append('summary', this.workForm.get('summary').value);
    return formData;
  }

  createWork() {
    const formModel = this.prepare();
    this.workService.createWork(formModel)
      .subscribe(data=>{
        if(data.json().success){
          this.workForm.reset();
          alert('添加成功');
        }
      },error=>{
        alert('添加失败');
      })
  }

}
