import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss']
})
export class EstimateComponent implements OnInit, AfterViewInit {
  products: Array<any> = [
    {id: 'VerticalBlind', name: 'Vertical Blind', content: 'Vertical Blinds are the best choice for your ultramodern sliding glass doors, floor-to-ceiling glass walls, and large windows. Drape them with our sleek vertical blinds and turn them into the center of attraction. We offer well over 60 fabric and 20 PVC options for you to choose from.', img : '../../assets/img/457/Vertical blinds.png'},
    {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'We offer the widest range of sophisticated, kid-friendly, and easy-to-clean faux wood blinds. Bring home high-end cordless moisture-resistant blinds, recommended especially for your bathroom and kitchen windows. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png'},
     {id: 'AluminumBlinds', name: 'Aluminum Blinds', content: 'Packaged together with robust aluminum slats, matching cords, and the most indefectible working parts, Ray’s Mini-Blinds or Aluminum Blinds are the optimal choices of classy, durable, and economical shades for all your walls and windows, perfected to accentuate your style.', img: '../../assets/img/457/Aluminium Blinds.png'},
     {id: 'ZebrablindsLightFileter', name: 'Zebra Light-Filter blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png'},
     {id: 'ZebrablindsBlackOut', name: 'Zebra Blackout blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png'},
     {id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller blinds are extremely easy to clean and conveniently operable utility shades. Bring home the finest top-end modern functional blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. In any case, we offer sun-fade protection for your furniture and flooring. Choose privacy; choose the class. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png'},
     {id: 'HoneycombBlinds', name: 'Honeycomb Blinds', content: 'Cellular Shades or Honeycomb Blinds are the perfect futuristic energy-efficient décor for your windows. Ray’s Honeycomb Blinds are the one-stop modern solution for all your privacy and environmental concerns. These cellular shades cut power costs by saving energy. They trap air to insulate your home against heat and cold. If you seek optimal light control, choose today from our custom range of light filtering or blackout fabrics for your cellular shades!', img: '../../assets/img/457/Day Night Honeycomb Blinds.png'},
     {id: 'RealWoodBlinds', name: 'Real Wood Blinds', content: 'Bring the beauty, richness, and sophistication of nature into your house with our top-shelf Real Wood Blinds. Find the right shade, stain, texture, and color to satiate your aesthetic from our premium range of durable and timeless blinds, crafted with perfection from real hardwood.', img: '../../assets/img/457/Real Wood Blinds.png'},
     {id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', content: 'Add an eastern touch to your house with elegant Shangri La Blinds made from lightweight top-tier sheer fabric. These modern horizontal shades are child-safe. You can raise them with the vanes open and close them fully or partially. Ray’s luxurious range of Shangri La Blinds is built from fine soft fabric that allows mild sunlight filtering to create an aesthetically pleasing and practically ambient home atmosphere while ensuring your privacy.', img: '../../assets/img/457/d.png'},
     {id: 'DayNightHoneycombBlinds', name: 'Day-Night Honeycomb Blinds', content: ' Block out the light, darken your rooms, and take a long peaceful nap or enjoy your day with mild natural sunlight + protection from harsh UV rays – own the luxury you deserve with Ray’s premium multifunctional Day-Night Honeycomb Blinds. These modern flexible cellular shades are environment-friendly cordless alternatives for when you need to switch between light filtering and room darkening. Custom-tailored with only the best fabrics for all your comfort and privacy needs!', img: '../../assets/img/457/Day Night Honeycomb Blinds.png'},
  ];
  firstname: String = "";
  secondname: String = "";
  address: String = "";
  address2: String = "";
  phoneNo: String = "";
  email: String = "";
  isSuccess = false;
  valid = true;
  isClicked = false;
  estimateData: Array<any> = [{
    room: '',
    quantity: '',
    width: '',
    widthf: '',
    height: '',
    heightf: '',
    typeOfBind: ''
  }];
  constructor(private http: HttpClient, ) { }

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
  addRoom() {
    this.estimateData.push({
      room: '',
    quantity: '',
    width: '',
    widthf: '',
    height: '',
    heightf: '',
    typeOfBind: ''
    });
  }
  removeRoom( ) {
    if (this.estimateData.length > 1) {
      this.estimateData.pop();
    }
  }
  submit(): void {
    this.isClicked = true;
    const Blind = ({
      firstname: this.firstname,
      secondname: this.secondname,
      address: this.address,
      address2: this.address2,
      phone: this.phoneNo,
      email: this.email,
      estimateData: this.estimateData
    });
    console.log(Blind);
    if(this.firstname !== '' || this.secondname !== '' || this.address !== '' || this.address2 !== '' || this.phoneNo !== '' || this.email !== '') {
      this.http.post('https://protected-journey-92830.herokuapp.com/emailCost', Blind).subscribe(responce => { this.isSuccess = true; this.isClicked = false; }, err => {console.log(err)});
    } else {
      this.valid = false;
      this.isClicked = false;

    }
  }
}
