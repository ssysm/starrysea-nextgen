import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class VersionService {

  constructor(
    private http:Http
  ) { }

  getLatestCommit(){
    return this.http
      .get('https://api.github.com/repos/ssysm/starrysea-nextgen/commits/')

  }

  getVersion(){
    return this.http
      .get('https://api.github.com/repos/ssysm/starrysea-nextgen/releases')
  }

}
