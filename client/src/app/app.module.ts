import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ServiceWorkerModule} from '@angular/service-worker';


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './view/home/home.component';
import {NavbarComponent} from './view/partical/navbar/navbar.component';
import {NotFoundComponent} from './view/partical/not-found/not-found.component';
import {HttpModule, BrowserXhr} from "@angular/http";
import {cros} from "./common/cros";
import {FooterComponent} from './view/partical/footer/footer.component';
import {environment} from "../environments/environment";
import {SpinnerComponent} from './view/partical/spinner/spinner.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LocaleService} from "./service/locale.service";
import {CookieService} from "./service/cookie.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    FooterComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    LocaleService,
    {
      provide: BrowserXhr,
      useClass: cros,
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
