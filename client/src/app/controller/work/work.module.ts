import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {WorkComponent} from "../../view/work/work.component";
import {WorkDetailComponent} from "../../view/work-detail/work-detail.component";
import {WorkService} from "../../service/work.service";
import {WorkRoutingModule} from "./work-routing.module";

@NgModule({
  imports:[
    CommonModule,
    WorkRoutingModule
  ],
  declarations:[
    WorkComponent,
    WorkDetailComponent
  ],
  providers:[
    WorkService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class WorkModule {
  
}
