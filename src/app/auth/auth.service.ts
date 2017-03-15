import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http} from "@angular/http";

import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface ICurrentUser {
  id: string,
  email: string,
  valid: boolean
}

@Injectable()
export class AuthService {

  currentUser: ICurrentUser;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private http: Http) {

  }

  login(email: string, password: string): Observable<boolean> {

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});

    return this.http
      .post("http://localhost:8080/login", JSON.stringify({
        'email': email,
        'password': password
      }), {headers: headers})
      .map(res => {
          this.currentUser = res.json().valid ? res.json() as ICurrentUser : null;
        }
      )
      .catch((error: any) => Observable.throw(error.json() || 'server error'));

  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  logout(): void {
    this.currentUser = null;
  }


}
