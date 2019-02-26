import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeTheme() {
    console.log('Change theme');
    console.log(document.getElementsByTagName('body')[0].style.background = 'black');
  }

}
