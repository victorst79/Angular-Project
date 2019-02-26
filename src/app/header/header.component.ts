import { Component, OnInit } from '@angular/core';

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
    if(this.toggle == true){
      document.getElementsByTagName('body')[0].style.background = '#484848';      
      this.toggle = false;
    }else if(this.toggle == false){
      document.getElementsByTagName('body')[0].style.background = 'white';
      this.toggle = true;
    }
  }

}
