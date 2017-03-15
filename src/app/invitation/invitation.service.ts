import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Invitation} from "../shared/Invitation";

@Injectable()
export class InvitationService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllInvitations(): Promise<Invitation[]> {
    return this.http.get("http://localhost:8080/invitations")
      .toPromise()
      .then(response => response.json() as Invitation[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
