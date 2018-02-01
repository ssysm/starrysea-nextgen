import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class VersionService {

  constructor(
    private http:Http
  ) { }

  getLatestCommit(){
    return this.http
      .get(environment.apiBase+'/version/latest/commit')

  }

  getLatestVersion(){
    return this.http
      .get(environment.apiBase+'/version/latest/version')
  }

}
