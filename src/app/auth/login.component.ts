import { Component, OnInit } from '@angular/core';
import { Router }      from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(formValues){
    console.log(formValues);
    this.authService.login(formValues.email,formValues.password).subscribe(() =>
      {
        if (this.authService.isAuthenticated()) {
          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          // Redirect the user
          this.router.navigate([redirect]);
        }

      }
    );
  }

}
