import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AboutRoutingModule} from "./about-routing.module";
import {AboutComponent} from "../../view/about/about.component";
import {QaComponent} from "../../view/qa/qa.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QaService} from "../../service/qa.service";
import {VersionService} from "../../service/version.service";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations:[
    AboutComponent,
    QaComponent,
  ],
  providers:[
    QaService,
    VersionService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class AboutModule { }
