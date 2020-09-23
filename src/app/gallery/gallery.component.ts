import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit{

  constructor() { }

  ngOnInit(): void {
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
