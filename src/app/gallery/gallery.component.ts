import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, AfterViewInit{
  products: Array<any> = [
    {id: 'VerticalBlind', name: 'Vertical Blind',  img : ['../../assets/img/product gallery/Vertical Blinds/IMG_7001.png']},
    {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds',  img: ['../../assets/img/product gallery/Faux Wood/IMG_3000.png', '../../assets/img/product gallery/Faux Wood/IMG_3001.png', '../../assets/img/product gallery/Faux Wood/IMG_3002.png', '../../assets/img/product gallery/Faux Wood/IMG_3003.png', '../../assets/img/product gallery/Faux Wood/IMG_3004.png', '../../assets/img/product gallery/Faux Wood/IMG_3005.png' , '../../assets/img/product gallery/Faux Wood/IMG_3006.png', '../../assets/img/product gallery/Faux Wood/IMG_3007.png', '../../assets/img/product gallery/Faux Wood/IMG_3008.png', '../../assets/img/product gallery/Faux Wood/IMG_3009.png', '../../assets/img/product gallery/Faux Wood/IMG_30010.png', '../../assets/img/product gallery/Faux Wood/IMG_30011.png', '../../assets/img/product gallery/Faux Wood/IMG_30012.png', '../../assets/img/product gallery/Faux Wood/IMG_30013.png', '../../assets/img/product gallery/Faux Wood/IMG_30014.png']},
     {id: 'AluminumBlinds', name: 'Aluminum Blinds',  img: ['../../assets/img/product gallery/Aluminium Blinds/IMG_1000.PNG','../../assets/img/product gallery/Aluminium Blinds/IMG_1001.png', '../../assets/img/product gallery/Aluminium Blinds/IMG_1002.png', '../../assets/img/product gallery/Aluminium Blinds/IMG_1003.png', '../../assets/img/product gallery/Aluminium Blinds/IMG_1004.PNG',  '../../assets/img/product gallery/Aluminium Blinds/IMG_1006.PNG']},
     {id: 'Zebrablinds', name: 'Zebra blinds',  img: ['../../assets/img/product gallery/Zebra Blinds/IMG_9000.png', '../../assets/img/product gallery/Zebra Blinds/IMG_9002.png', '../../assets/img/product gallery/Zebra Blinds/IMG_9003.png','../../assets/img/product gallery/Zebra Blinds/IMG_9004.png', '../../assets/img/product gallery/Zebra Blinds/IMG_9005.png', '../../assets/img/product gallery/Zebra Blinds/IMG_9006.png', '../../assets/img/product gallery/Zebra Blinds/IMG_9007.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_9008.png', '../../assets/img/product gallery/Zebra Blinds/IMG_90010.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90011.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90012.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90013.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90014.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90015.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90016.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90017.png',  '../../assets/img/product gallery/Zebra Blinds/IMG_90018.png',  ]},
     {id: 'RollerBlinds', name: 'Roller Blinds', img: ['../../assets/img/product gallery/Roller Blinds/IMG_6000.png', '../../assets/img/product gallery/Roller Blinds/IMG_6001.png', '../../assets/img/product gallery/Roller Blinds/IMG_6002.png', '../../assets/img/product gallery/Roller Blinds/IMG_6003.png', '../../assets/img/product gallery/Roller Blinds/IMG_6004.png', '../../assets/img/product gallery/Roller Blinds/IMG_6005.png', '../../assets/img/product gallery/Roller Blinds/IMG_6006.png', '../../assets/img/product gallery/Roller Blinds/IMG_6007.png', '../../assets/img/product gallery/Roller Blinds/IMG_6008.png', '../../assets/img/product gallery/Roller Blinds/IMG_6009.png', '../../assets/img/product gallery/Roller Blinds/IMG_60010.png', '../../assets/img/product gallery/Roller Blinds/IMG_60011.png', '../../assets/img/product gallery/Roller Blinds/IMG_60012.png', '../../assets/img/product gallery/Roller Blinds/IMG_60013.png', '../../assets/img/product gallery/Roller Blinds/IMG_60014.png', '../../assets/img/product gallery/Roller Blinds/IMG_60015.png', '../../assets/img/product gallery/Roller Blinds/IMG_60016.png', '../../assets/img/product gallery/Roller Blinds/IMG_60017.png' ] },
     {id: 'RealWoodBlinds', name: 'Real Wood Blinds',  img: ['../../assets/img/product gallery/Real Wood Blinds/IMG_5000.png', '../../assets/img/product gallery/Real Wood Blinds/IMG_5001.png', '../../assets/img/product gallery/Real Wood Blinds/IMG_5002.png', '../../assets/img/product gallery/Real Wood Blinds/IMG_5003.png', '../../assets/img/product gallery/Real Wood Blinds/IMG_5004.png']},
     {id: 'HoneycombBlinds', name: 'Honeycomb Blinds',  img: ['../../assets/img/product gallery/Honeycomb Blinds/IMG_4000.png', '../../assets/img/product gallery/Honeycomb Blinds/IMG_4001.png', '../../assets/img/product gallery/Honeycomb Blinds/IMG_4002.png', '../../assets/img/product gallery/Honeycomb Blinds/IMG_4003.png', '../../assets/img/product gallery/Honeycomb Blinds/IMG_4004.png', ]},
     {id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', img: ['../../assets/img/product gallery/Vienna Blinds/IMG_8000.png']},
     {id: 'DayNightHoneycombBlinds', name: 'Day-Night Honeycomb Blinds', img: ['../../assets/img/product gallery/Day And Night HoneyComb Blinds/9001.jpeg']},
  ];
  selectedProduct: any = {
    id: '', name: '', img: ['']
  };
  constructor(private route: ActivatedRoute, private location: Location) {
    const id = this.route.snapshot.paramMap.get('id');
    this. selectedProduct = this.products.find(obj => {
      return obj.id === id;
    });
  }

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
  back() {
    this.location.back();
  }
}
