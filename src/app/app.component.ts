import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit{
  title = 'rayblinds';
  constructor(public router: Router) {}
  ngAfterViewInit() {
    var dropToggle = $('.menu_right > li').has('ul').children('a');
    dropToggle.on('click', function() {
      dropToggle.not(this).closest('li').find('ul').slideUp(200);
      $(this).closest('li').children('ul').slideToggle(200);
      return false;
    });

    $( ".toggle_icon" ).on('click', function() {
      $( 'body' ).toggleClass( "open" );
    });


  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }
}
