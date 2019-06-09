import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  menuItems:object[]
  constructor() {
    this.menuItems = [
      {
        label:'Home',
        route: '/home'
      },
      {
        label: 'Search',
        route: '/search'
      }
    ]
   }

  ngOnInit() {
  }

}
