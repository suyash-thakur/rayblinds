import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.scss']
})
export class ProductCatalogueComponent implements OnInit, AfterViewInit {
  products: Array<any> = [
    {id: 'VerticalBlind', name: 'Vertical Blind',  img : '../../assets/img/653/Vertical blinds.png'},
    {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds',  img: '../../assets/img/653/Faux wood.png'},
     {id: 'AluminumBlinds', name: 'Aluminum Blinds',  img: '../../assets/img/653/Aluminium Blinds.png'},
     {id: 'Zebrablinds', name: 'Zebra blinds',  img: '../../assets/img/653/Zebra Blinds.png'},
     {id: 'RollerBlinds', name: 'Roller Blinds',  img: '../../assets/img/653/Roller Blinds.png'},
     {id: 'RealWoodBlinds', name: 'Real Wood Blinds',  img: '../../assets/img/653/Real Wood Blinds.png'},
     {id: 'HoneycombBlinds', name: 'Honeycomb Blinds',  img: '../../assets/img/653/Honeycomb Blinds.png'},
     {id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', img: '../../assets/img/653/Vienna Blinds.png'},


     {id: 'DayNightHoneycombBlinds', name: 'Day-Night Honeycomb Blinds', img: '../../assets/img/653/Day Night Honeycomb Blinds.png'},
  ];
  constructor(public router: Router) { }

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
  changeRoute(id) {
    this.router.navigate(['productDetails/' + id]);
  }
}
