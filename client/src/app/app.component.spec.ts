import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./view/partical/navbar/navbar.component";
import {FooterComponent} from "./view/partical/footer/footer.component";
import { LocaleService } from './service/locale.service';
import {CookieService} from "./service/cookie.service";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
      ],
      providers:[
        LocaleService,
        CookieService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
