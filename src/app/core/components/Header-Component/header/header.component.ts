import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  // loginEnable: Boolean = true;
  // logoutEnable: Boolean = false;
  // AddNewzEnable: Boolean = false;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }


  logIn() {
    this.route.navigate(['/login']);
  }

  logOut() {
    sessionStorage.clear();
    this.route.navigate(['/login']);
  }

  logoutEnable(): boolean {
    if (sessionStorage.getItem('TOKEN') !== null) {
      return true;
    }
    return false;
  }

}
