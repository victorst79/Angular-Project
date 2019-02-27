import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public toggle = true;
  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    $('body').css('transition', 'all 1s');
    $('.card').css('transition', 'all 1s');
    if (this.toggle === true) {
      $('body').css('background-color', '#484848');
      $('.card').css('background-color', 'grey');
      $('.card h5').css('color', 'white');
      $('.card p').css('color', 'white');
      this.toggle = false;
    } else if (this.toggle === false) {
      $('body').css('background-color', 'white');
      $('.card').css('background-color', 'white');
      $('.card h5').css('color', 'black');
      $('.card p').css('color', 'black');
      this.toggle = true;
    }
  }

}
