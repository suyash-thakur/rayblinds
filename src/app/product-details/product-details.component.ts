import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, AfterViewInit {
  products: Array<any> = [
    {id: 'VerticalBlind', name: 'Vertical Blind', content: 'Vertical Blinds are the best choice for your ultramodern sliding glass doors, floor-to-ceiling glass walls, and large windows. Drape them with our sleek vertical blinds and turn them into the center of attraction. We offer well over 60 fabrics and 20 PVC options for you to choose from.', img : '../../assets/img/457/Vertical blinds.png', img2: '../../assets/img/457/Verticle Blinds 2.jpg'},
    {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'Bring home High-End, Durable Faux Wood Blinds that can withstand multiple years of rough handling. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png', img2: '../../assets/img/457/Faux Wood 2.jpg'},
     {id: 'AluminumBlinds', name: 'Aluminum Blinds', content: 'Packaged together with robust 8-gauge aluminum slats, matching cords, and the most flawless working parts, Ray’s Aluminum Blinds are the optimal choice of classy and economical shades for your windows, perfected to accentuate your style. Select from 9 popular colour choices!', img: '../../assets/img/457/Aluminium Blinds.png', img2: '../../assets/img/457/aluminimblinds2.jpg'},
     {id: 'Zebrablinds', name: 'Zebra blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Colour-coordinated plus fabric pasted metal head and bottom rail, and more than hundred fabrics are only a few of the characteristics that make these blinds so sought-after. The cordless option makes them sleek and most importantly, child safe. Additionally, these blinds come with automation feature which gives you an option to make them motorized or smart.', img: '../../assets/img/457/Zebra Blinds.png', img2: '../../assets/img/457/Zebra Blinds 2.jpg'},
     {id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller Blinds are extremely easy to clean and conveniently operable utility shades. Bring home sleek, easy to maintain, and modern blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png', img2: '../../assets/img/457/Roller Blinds 2.jpg'},
     {id: 'HoneycombBlinds', name: 'Honeycomb Blinds', content: 'Cellular Shades or Honeycomb Blinds are the perfect futuristic energy-efficient décor for your windows. Ray’s Honeycomb Blinds are the one-stop modern solution for all your privacy and environmental concerns. These cellular shades cut power costs by saving energy. They trap air to insulate your home against heat and cold. If you seek optimal light control, choose today from our custom range of light filtering or blackout fabrics for your cellular shades!', img: '../../assets/img/457/Day Night Honeycomb Blinds.png', img2: '../../assets/img/457/Day Night Honeycomb Blinds 2.jpg'},
     {id: 'RealWoodBlinds', name: 'Real Wood Blinds', content: 'Bring the beauty, richness, and sophistication of nature into your house with our top-shelf Real Wood Blinds. Find the right shade, stain, texture, and color to satiate your aesthetic from our premium range of durable and timeless blinds, crafted with perfection from real hardwood.', img: '../../assets/img/457/Real Wood Blinds.png', img2:'../../assets/img/457/Ray Wood Blinds 2.JPG'},
     {id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', content: 'Add an amazing touch to your house with elegant Shangri La Blinds made from lightweight top-tier sheer and blackout fabric. Ray’s luxurious range of Shangri La Blinds is built from fine soft fabric that allows mild sunlight filtering to create an aesthetically pleasing and practically ambient home atmosphere while ensuring your privacy.', img: '../../assets/img/457/Vienna Blinds.png', img2: '../../assets/img/457/Vienna Blinds.JPG'},
     {id: 'DayNightHoneycombBlinds', name: 'Day-Night Honeycomb Blinds', content: ' Block out the light, darken your rooms, and take a long peaceful nap or enjoy your day with mild natural sunlight + protection from harsh UV rays – own the luxury you deserve with Ray’s premium multifunctional Day-Night Honeycomb Blinds. These modern flexible cellular shades are environment-friendly cordless alternatives for when you need to switch between light filtering and room darkening. Custom-tailored with only the best fabrics for all your comfort and privacy needs!', img: '../../assets/img/457/Group 1.png', img2: '../../assets/img/457/Day-Night Honeycomb Blinds.png'},
  ];
  selectedProduct: any = {
    id: '', name: '', content: '', img: ''
  };
  constructor(private route: ActivatedRoute, public router: Router) {
    const id = this.route.snapshot.paramMap.get('id');
    this. selectedProduct = this.products.find(obj => {
      return obj.id === id;
    });
  }

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

    $(document).on('click',function (event) {
      var clickover = $(event.target);
      var _opened = $("body").hasClass("open");
      if (_opened === true && !clickover.hasClass("side_menu") && !clickover.hasClass("Menu Bar") && !clickover.hasClass("toggle_icon")) {
        $( 'body' ).removeClass("open");
      }
  });
  }
  changeRoute( ) {
    this.router.navigate(['gallery/' + this.selectedProduct.id]);
  }
}
