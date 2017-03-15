import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Organization} from "../shared/Organization";

@Injectable()
export class OrganizationService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllOrganizations(): Promise<Organization[]> {
    return this.http.get("http://localhost:8080/organizations")
      .toPromise()
      .then(response => response.json() as Organization[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
