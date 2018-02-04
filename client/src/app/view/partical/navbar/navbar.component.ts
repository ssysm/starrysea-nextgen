import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
    jQuery(window).scroll(function() {
      if(jQuery(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
      {
        jQuery('.navbar').addClass('scroll');
      } else {
        jQuery('.navbar').removeClass('scroll');
      }
    });
  }

}
