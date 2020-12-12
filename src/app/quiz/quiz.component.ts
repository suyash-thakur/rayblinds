import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isBegin = false;
  showRecommendation = false;
  counter = 0;
  recommendation: Array<any> = [];
  blinds =  [
    {
      id: 'Zebrablinds', name: 'Zebra blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png',
      material: 'fabric',
      moterize: true,
      lightControl: true,
      easymentanace: true,
      dustproof: true,
      insulation: true,
      popular: true,
      price: 3,
      count: 1
    },
    {
      id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'We offer the widest range of sophisticated, kid-friendly, and easy-to-clean faux wood blinds. Bring home high-end cordless moisture-resistant blinds, recommended especially for your bathroom and kitchen windows. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png',
      material: 'Faux-Wood',
      moterize: false,
      lightControl: false,
      easymentanace: false,
      dustproof: false,
      insulation: false,
      popular: true,
      price: 1,
      count: 0
    },
    {
      id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller blinds are extremely easy to clean and conveniently operable utility shades. Bring home the finest top-end modern functional blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. In any case, we offer sun-fade protection for your furniture and flooring. Choose privacy; choose the class. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png',
      material: 'fabric',
      moterize: true,
      lightControl: true,
      easymentanace: true,
      dustproof: true,
      insulation: true,
      popular: true,
      price: 2,
      count: 0
    },
    {
      id: 'HoneycombBlinds', name: 'Honeycomb Blinds', content: 'Cellular Shades or Honeycomb Blinds are the perfect futuristic energy-efficient décor for your windows. Ray’s Honeycomb Blinds are the one-stop modern solution for all your privacy and environmental concerns. These cellular shades cut power costs by saving energy. They trap air to insulate your home against heat and cold. If you seek optimal light control, choose today from our custom range of light filtering or blackout fabrics for your cellular shades!', img: '../../assets/img/457/Day Night Honeycomb Blinds.png',
      material: 'soft paper',
      moterize: true,
      lightControl: true,
      easymentanace: true,
      dustproof: true,
      insulation: true,
      popular: false,
      price: 3,
      count: 0
    },
    {
      id: 'VerticalBlind', name: 'Vertical Blind', content: 'Vertical Blinds are the best choice for your ultramodern sliding glass doors, floor-to-ceiling glass walls, and large windows. Drape them with our sleek vertical blinds and turn them into the center of attraction. We offer well over 60 fabric and 20 PVC options for you to choose from.', img : '../../assets/img/457/Vertical blinds.png',
      material: 'PVC',
      moterize: false,
      lightControl: true,
      easymentanace: false,
      dustproof: false,
      insulation: false,
      popular: false,
      count: 0,
      price: 2,
    },
    {
      id: 'AluminumBlinds', name: 'Aluminum Blinds', content: 'Packaged together with robust aluminum slats, matching cords, and the most indefectible working parts, Ray’s Mini-Blinds or Aluminum Blinds are the optimal choices of classy, durable, and economical shades for all your walls and windows, perfected to accentuate your style.', img: '../../assets/img/457/Aluminium Blinds.png',
      material: 'Metal',
      moterize: false,
      lightControl: false,
      easymentanace: false,
      dustproof: false,
      insulation: false,
      popular: false,
      price: 1,
      count: 0
    },
    {
      id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', content: 'Add an eastern touch to your house with elegant Shangri La Blinds made from lightweight top-tier sheer fabric. These modern horizontal shades are child-safe. You can raise them with the vanes open and close them fully or partially. Ray’s luxurious range of Shangri La Blinds is built from fine soft fabric that allows mild sunlight filtering to create an aesthetically pleasing and practically ambient home atmosphere while ensuring your privacy.', img: '../../assets/img/457/d.png',
      material: 'fabric',
      moterize: true,
      lightControl: true,
      easymentanace: true,
      dustproof: true,
      insulation: true,
      popular: false,
      price: 3,
      count: 0
    },
    {
      id: 'RealWoodBlinds', name: 'Real Wood Blinds', content: 'Bring the beauty, richness, and sophistication of nature into your house with our top-shelf Real Wood Blinds. Find the right shade, stain, texture, and color to satiate your aesthetic from our premium range of durable and timeless blinds, crafted with perfection from real hardwood.', img: '../../assets/img/457/Real Wood Blinds.png',
      material: 'Real Wood',
      moterize: false,
      lightControl: false,
      easymentanace: false,
      dustproof: false,
      insulation: false,
      popular: false,
      price: 3,
      count: 0
    },
    {
      id: 'DayNightHoneycombBlinds', name: 'Day-Night Honeycomb Blinds', content: ' Block out the light, darken your rooms, and take a long peaceful nap or enjoy your day with mild natural sunlight + protection from harsh UV rays – own the luxury you deserve with Ray’s premium multifunctional Day-Night Honeycomb Blinds. These modern flexible cellular shades are environment-friendly cordless alternatives for when you need to switch between light filtering and room darkening. Custom-tailored with only the best fabrics for all your comfort and privacy needs!', img: '../../assets/img/457/Day Night Honeycomb Blinds.png',
      material: 'soft paper',
      moterize: true,
      lightControl: true,
      easymentanace: true,
      dustproof: true,
      insulation: true,
      popular: false,
      count: 0,
      price: 4,

    }
  ];
  questions = [
  {
    question: 'Which material do you prefer ?',
    options: [{name: 'Fabric', value: 'fabric'}, {name: 'Faux-Wood', value: 'Faux-Wood'}, {name: 'Real Wood', value: 'Real Wood'}, {name: 'PVC', value: 'PVC'}, {name: 'Soft Paper', value: 'soft paper'}, {name: 'Metal', value: 'Metal'}],
    functioName: 'onMaterialSelect'
  },
  {
    question: 'What is your preferred mode of control ?',
    options: [{name: 'Manual', value: 'manual'}, {name: 'Cordless', value: 'cordless'}, {name: 'Motorized', value: 'motorized'}, {name: 'Smart', value: 'smart'}]

  },
  {
    question: 'What is your preferred range of price ?',
    options: [{name: '$', value: '1'}, {name: '$$', value: '2'}, {name: '$$$', value: '3'}, {name: '$$$$', value: '4'}]
  },
  {
    question: 'What are your preferred features ?',
    options: [{name: 'Dust Proof', value: 'Dust Proof'}, {name: 'Easy Maintenance', value: 'Easy Maintenance'}, {name: 'Insulation', value: 'Insulation'}, {name: 'Most Popular', value: 'Most Popular'}]
  }
];
  constructor(public router: Router) { }

  ngOnInit(): void {
    $( 'body' ).removeClass('open');

  }
  begin(): void {
    this.isBegin = true;
  }

  optionClicked(index): void {
    if (index !== this.questions.length - 1) {
      this.counter = this.counter + 1;
    }

  }
  ngAfterViewInit(): void {
    const dropToggle = $('.menu_right > li').has('ul').children('a');
    dropToggle.on('click', function() {
      dropToggle.not(this).closest('li').find('ul').slideUp(200);
      $(this).closest('li').children('ul').slideToggle(200);
      return false;
    });

    $( '.toggle_icon' ).on('click', function() {
      $( 'body' ).toggleClass( 'open' );
    });

    $(document).on('click',function (event) {
      var clickover = $(event.target);
      var _opened = $("body").hasClass("open");
      if (_opened === true && !clickover.hasClass("side_menu") && !clickover.hasClass("Menu Bar") && !clickover.hasClass("toggle_icon")) {
        $( 'body' ).removeClass("open");
      }
  });
  }
  routerButton(id) {
    this.router.navigate(['/productDetails/' + id]);
  }
  onOptionSelect(event, i){
    switch (this.counter){
      case 0:
        if (event.target.checked){
          for (let j = 0; j < this.blinds.length; j++) {
            if (this.blinds[j].material === this.questions[this.counter].options[i].value) {
              this.blinds[j].count = this.blinds[j].count + 1;
            }
          }
        } else {
          for (let j = 0; j < this.blinds.length; j++) {
            if (this.blinds[j].material === this.questions[this.counter].options[i].value) {
              this.blinds[j].count = this.blinds[j].count - 1;
            }
          }
        }
        break;
      case 1:
        let isMotorized: boolean;
        if (i === 2 || i === 3) {
          isMotorized = true;
          if (event.target.checked){
            for (let j = 0; j < this.blinds.length; j++) {
              if (this.blinds[j].moterize === isMotorized) {
                this.blinds[j].count = this.blinds[j].count + 1;
              }
            }
          } else {
            for (let j = 0; j < this.blinds.length; j++) {
              if (this.blinds[j].moterize === isMotorized) {
                this.blinds[j].count = this.blinds[j].count - 1;
              }
            }
          }

    }   else {
          isMotorized = false;
          if (event.target.checked){
            for (let j = 0; j < this.blinds.length; j++) {

                this.blinds[j].count = this.blinds[j].count + 1;

            }
          } else {
            for (let j = 0; j < this.blinds.length; j++) {
                this.blinds[j].count = this.blinds[j].count - 1;
            }
          }
    }

        break;
    case 2:
      if(event.target.checked) {
        for (let j = 0; j < this.blinds.length; j++) {
          if(this.blinds[j].price === Number(this.questions[this.counter].options[i].value) ) {
            this.blinds[j].count = this.blinds[j].count + 1;
          }
        }
      } else {
        for (let j = 0; j < this.blinds.length; j++) {
          if(this.blinds[j].price === Number(this.questions[this.counter].options[i].value) ) {
            this.blinds[j].count = this.blinds[j].count + 1;
          }
        }
      }
      break;
      case 3:
        if(event.target.checked) {
          switch(this.questions[this.counter].options[i].value){
            case 'Dust Proof':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].dustproof === true) {
                  this.blinds[j].count = this.blinds[j].count + 1;
                }
              }
                break;
            case 'Easy Maintenance':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].easymentanace === true) {
                  this.blinds[j].count = this.blinds[j].count + 1;
                }
              }
                break;
            case 'Insulation':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].insulation === true) {
                  this.blinds[j].count = this.blinds[j].count + 1;
                }
              }
              break;
            case 'Most Popular':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].easymentanace === true) {
                  this.blinds[j].count = this.blinds[j].count + 1;
                }
              }
          }
        } else {
          switch(this.questions[this.counter].options[i].value){
            case 'Dust Proof':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].dustproof === true) {
                  this.blinds[j].count = this.blinds[j].count - 1;
                }
              }
                break;
            case 'Easy Maintenance':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].easymentanace === true) {
                  this.blinds[j].count = this.blinds[j].count - 1;
                }
              }
                break;
            case 'Insulation':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].insulation === true) {
                  this.blinds[j].count = this.blinds[j].count - 1;
                }
              }
              break;
            case 'Most Popular':
              for (let j = 0; j < this.blinds.length; j++) {
                if(this.blinds[j].easymentanace === true) {
                  this.blinds[j].count = this.blinds[j].count - 1;
                }
              }
          }
        }
  }
    }
    submitQuiz() {

      this.blinds.sort((a, b) => a.count >= b.count ? - 1 : 0 );
      console.log(this.blinds);
      this.showRecommendation = true;

    }

  }


