import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {
  firstname = "";
  lastname =  "";
  phonenumber = "";
  email = "";
  modeofcontact = "";
  address = "";
  isSuccess = false;
  valid = true;
  constructor(private http: HttpClient) { }

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

  submit(): void {
    const Data = ({
      name: this.firstname + " " + this.lastname,
      phone: this.phonenumber,
      email: this.email,
      modeofcontact: this.modeofcontact,
      address: this.address
    });
    if(this.firstname !== '' || this.lastname !== '' || this.address !== '' ||  this.phonenumber !== '' || this.email !== '') {
      this.http.post('http://localhost:3000/emailSession', Data).subscribe(responce => {this.isSuccess = true}, err => {console.log(err)});
    } else {
      this.valid = false;
    }
  }
}
