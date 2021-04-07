import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  catalogue: Array<any> = [
    {
      name: 'Blackout Combi Shades', image: [
      '../../assets/img/JDX-ebook_PHARAOH.jpg', '../../assets/img/JDX-ebook_TOPAZ (1).jpg', '../../assets/img/JDX-ebook_AMAZON.jpg', '../../assets/img/JDX-ebook_CRYSTAL-1.jpg', '../../assets/img/JDX-ebook_OSCAR-2.jpg', '../../assets/img/JDX-ebook_LIGHT-1.jpg'
      ]
    },
    {
      name: 'Combi Shades', image: [
        '../../assets/img/JDX-ebook_OBZET-TWINS.jpg', '../../assets/img/JDX-ebook_OCEAN_1.jpg', '../../assets/img/JDX-ebook_OCEAN_2-1.jpg', '../../assets/img/JDX-ebook_FARO-TWINS.jpg', '../../assets/img/JDX-ebook_CALM.jpg', '../../assets/img/JDX-ebook_TIVOLI.jpg', '../../assets/img/JDX-ebook_PRETTY_MOTIVE.jpg', '../../assets/img/JDX-ebook_HERA_ORION-1.jpg', '../../assets/img/JDX-ebook_MABLE.jpg', '../../assets/img/JDX-ebook_FARO.jpg', '../../assets/img/JDX-ebook_MARE-1.jpg', '../../assets/img/JDX-ebook_AMPLE-1.jpg', '../../assets/img/JDX-ebook_DAYNIGHT_1.jpg', '../../assets/img/JDX-ebook_DAYNIGHT_2.jpg'
      ]
    },
    {
      name: 'Triple Shades', image: [
        '../../assets/img/JDX-ebook_GALAXY.jpg', '../../assets/img/JDX-ebook_NORMAL.jpg'
      ]
    },
    {
      name: 'Roll Screen', image: [
        '../../assets/img/JDX-ebook_SUN-SCREEN_SKY-ROLL-SCREEN_ALPHA-BLACKOUT-ROLL-SCREEN-1.jpg'
      ]
    }
  ];
  selectedImg = '';
  constructor() { }
  selectImg(img) {
    this.selectedImg = img;
    $('#exampleModal').modal('show');

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
    $(document).on('click',function (event) {
      var clickover = $(event.target);
      var _opened = $("body").hasClass("open");
      if (_opened === true && !clickover.hasClass("side_menu") && !clickover.hasClass("Menu Bar") && !clickover.hasClass("toggle_icon")) {
        $( 'body' ).removeClass("open");
      }
  });
  }
}
