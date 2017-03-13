import {Component} from '@angular/core';

import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title: string = "Carpetfield";

  constructor(private authService:AuthService) {

  }

}
