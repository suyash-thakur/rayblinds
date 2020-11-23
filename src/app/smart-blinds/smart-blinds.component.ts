import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-smart-blinds',
  templateUrl: './smart-blinds.component.html',
  styleUrls: ['./smart-blinds.component.scss']
})
export class SmartBlindsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $( 'body' ).removeClass('open');

  }
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
}
