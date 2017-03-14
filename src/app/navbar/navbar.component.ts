import {Component} from '@angular/core';
import {Router}      from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = "Carpetfield";

  constructor(private authService: AuthService,
              private router: Router) {

  }

  doLogOut() {
    console.log("doLogout");
    this.authService.logout();
    this.router.navigate(['']);
  }

}
