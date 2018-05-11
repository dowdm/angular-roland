import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../models/category.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
   providers: [AuthenticationService]
})
export class NavBarComponent  {
  // constructor(private router: Router){}
// currentRoute: string = this.router.url;
user;
private isLoggedIn: Boolean;
private userName: String;

constructor(private router: Router, public authService: AuthenticationService) {
  this.authService.user.subscribe(user => {
    if (user == null) {
      this.isLoggedIn = false;
      this.router.navigate(['']);
    } else {
      this.isLoggedIn = true;
      this.userName = user.displayName;
      this.router.navigate(['login']);
    }
  });
}




  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }


}
