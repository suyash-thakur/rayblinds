import { Component, OnInit } from '@angular/core';
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
  questions = [{
    question: 'What kind of property would you like to install your blinds in?',
    option1: 'Home',
    option2: 'Office',
    responce: 1

  },
  {
    question: 'Which material do you prefer?',
    option1: 'Wood',
    option2: 'Fabric',
    responce: 1
  },
  {
    question: 'Is price is the determining factor ?',
    option1: 'Yes',
    option2: 'No',
    responce: 1

  }
];
  constructor() { }

  ngOnInit(): void {
    $( 'body' ).removeClass('open');

  }
  begin(): void {
    this.isBegin = true;
  }
  optionClicked(index, optionClicked): void {
    if (index !== this.questions.length - 1) {
      this.questions[index].responce = optionClicked;
      this.counter = this.counter + 1;
    } else {
      this.questions[index].responce = optionClicked;
      if (this.questions[0].responce === 0 && this.questions[1].responce === 1 && this.questions[2].responce === 1) {
        let product = {id: 'Zebrablinds', name: 'Zebra blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png'};
        this.recommendation.push(product);
        product = {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'We offer the widest range of sophisticated, kid-friendly, and easy-to-clean faux wood blinds. Bring home high-end cordless moisture-resistant blinds, recommended especially for your bathroom and kitchen windows. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png'};
        this.recommendation.push(product);
        product = {id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller blinds are extremely easy to clean and conveniently operable utility shades. Bring home the finest top-end modern functional blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. In any case, we offer sun-fade protection for your furniture and flooring. Choose privacy; choose the class. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png'}
        this.recommendation.push(product);
        this.showRecommendation = true;
      } else if (this.questions[0].responce === 0 && this.questions[1].responce === 0 && this.questions[2].responce === 1 || this.questions[0].responce === 1 && this.questions[1].responce === 0 && this.questions[2].responce === 1) {
        let product = {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'We offer the widest range of sophisticated, kid-friendly, and easy-to-clean faux wood blinds. Bring home high-end cordless moisture-resistant blinds, recommended especially for your bathroom and kitchen windows. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png'};
        this.recommendation.push(product);
        product = {id: 'RealWoodBlinds', name: 'Real Wood Blinds', content: 'Bring the beauty, richness, and sophistication of nature into your house with our top-shelf Real Wood Blinds. Find the right shade, stain, texture, and color to satiate your aesthetic from our premium range of durable and timeless blinds, crafted with perfection from real hardwood.', img: '../../assets/img/457/Real Wood Blinds.png'};
        this.recommendation.push(product);
        product = {id: 'Zebrablinds', name: 'Zebra blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png'};
        this.recommendation.push(product);
        this.showRecommendation = true;
      // tslint:disable-next-line:max-line-length
      } else if (this.questions[0].responce === 0 && this.questions[1].responce === 0 && this.questions[2].responce === 0 || this.questions[0].responce === 1 && this.questions[1].responce === 1 && this.questions[2].responce === 0 || this.questions[0].responce === 1 && this.questions[1].responce === 0 && this.questions[2].responce === 0 || this.questions[0].responce === 0 && this.questions[1].responce === 1 && this.questions[2].responce === 0 ) {
        let product = {id: 'FauxWoodBlinds' , name: 'Faux Wood Blinds', content: 'We offer the widest range of sophisticated, kid-friendly, and easy-to-clean faux wood blinds. Bring home high-end cordless moisture-resistant blinds, recommended especially for your bathroom and kitchen windows. If you seek the rich look of real wood at a small price tag, Ray’s Faux Wood Blinds are here offering premium durability and privacy for your home. Great quality, smooth finishing, and a classic appeal – at an affordable, budget-friendly rate!', img: '../../assets/img/457/Faux Wood.png'};
        this.recommendation.push(product);
        product = {id: 'AluminumBlinds', name: 'Aluminum Blinds', content: 'Packaged together with robust aluminum slats, matching cords, and the most indefectible working parts, Ray’s Mini-Blinds or Aluminum Blinds are the optimal choices of classy, durable, and economical shades for all your walls and windows, perfected to accentuate your style.', img: '../../assets/img/457/Aluminium Blinds.png'};
        this.recommendation.push(product);
        product = {id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller blinds are extremely easy to clean and conveniently operable utility shades. Bring home the finest top-end modern functional blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. In any case, we offer sun-fade protection for your furniture and flooring. Choose privacy; choose the class. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png'};
        this.recommendation.push(product);
        this.showRecommendation = true;
      } else if (this.questions[0].responce === 1 && this.questions[1].responce === 0 && this.questions[2].responce === 0 ) {
        let product = {id: 'RollerBlinds', name: 'Roller Blinds', content: 'Roller blinds are extremely easy to clean and conveniently operable utility shades. Bring home the finest top-end modern functional blinds that can either block out or filter sunlight entering your home, depending on the fabric you select. In any case, we offer sun-fade protection for your furniture and flooring. Choose privacy; choose the class. Choose Ray’s Roller Blinds!', img: '../../assets/img/457/Roller Blinds.png'};
        this.recommendation.push(product);
        product = {id: 'Zebrablinds', name: 'Zebra blinds', content: 'Our uniquely designed Zebra Blinds offer the ultimate control over decor, privacy, light, and style. Create a desirable amount of ambiance whilst maintaining privacy. Give your home that sleek contemporary look you love. A perfect choice for your living room, bedroom, and study.', img: '../../assets/img/457/Zebra Blinds.png'};
        this.recommendation.push(product);
        product = {id: 'ShangriLaBlinds', name: 'Shangri-La Blinds', content: 'Add an eastern touch to your house with elegant Shangri La Blinds made from lightweight top-tier sheer fabric. These modern horizontal shades are child-safe. You can raise them with the vanes open and close them fully or partially. Ray’s luxurious range of Shangri La Blinds is built from fine soft fabric that allows mild sunlight filtering to create an aesthetically pleasing and practically ambient home atmosphere while ensuring your privacy.', img: '../../assets/img/457/d.png'};
        this.recommendation.push(product);
        this.showRecommendation = true;


      }
    }
  }
  ngAfterViewInit(): void {
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
