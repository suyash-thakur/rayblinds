import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit, AfterViewInit {
  estimateData: Array<any> = [{
    room: '',
    quantity: '',
    width: '',
    height: '',
    typeOfBind: ''
  }];
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
  addRoom() {
    this.estimateData.push({
      room: '',
    quantity: '',
    width: '',
    height: '',
    typeOfBind: ''
    });
  }
  removeRoom( ) {
    if (this.estimateData.length > 1) {
      this.estimateData.pop();
    }
  }
}
