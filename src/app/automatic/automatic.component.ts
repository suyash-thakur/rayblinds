import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automatic',
  templateUrl: './automatic.component.html',
  styleUrls: ['./automatic.component.scss']
})
export class AutomaticComponent implements OnInit, AfterViewInit {

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
      $(document).on('click',function (event) {
        var clickover = $(event.target);
        var _opened = $("body").hasClass("open");
        if (_opened === true && !clickover.hasClass("side_menu") && !clickover.hasClass("Menu Bar") && !clickover.hasClass("toggle_icon")) {
          $( 'body' ).removeClass("open");
        }
    });
    }
}
