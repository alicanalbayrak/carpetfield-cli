import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

export interface IUser {
  id: string,
  name: string,
  email: string,
  password: string
}

@Injectable()
export class AuthService {

  currentUser: IUser;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(email: string, password: string): Observable<boolean> {
    return Observable.of(true).delay(1000).do(
      val => this.currentUser = {
        id: "1",
        name: "alican",
        email: email,
        password: password
      }
    );
  }

  isAuthenticated(){
    return !!this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }


}
