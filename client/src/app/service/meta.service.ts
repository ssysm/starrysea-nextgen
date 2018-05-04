import { Injectable } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Injectable()
export class MetaService {
  constructor(
   private meta:Meta,
   private title:Title
  ){ }

  updateTag(title:string,description:string="",img:string="/assets/icons/starrysea-512x512.png"){
    this.title.setTitle(title);
    this.meta.updateTag({content:img}, "property='og:image'");
    this.meta.updateTag({content: title}, "property='og:title'");
    this.meta.updateTag({content:description}, "property='og:description'");
    this.meta.updateTag({content: description}, "name='description'");
  }


}
