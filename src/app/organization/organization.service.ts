import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {AuthService} from '../auth/auth.service'

export interface UserOrganization{
  organizationId: number;
  name: string;
  owner: boolean;
}

@Injectable()
export class OrganizationService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http,
              private authService: AuthService) {
  }

  getAllOrganizations(): Promise<UserOrganization[]> {
    return this.http.get("http://localhost:8080/users/"+this.authService.currentUser.id+"/organizations")
      .toPromise()
      .then(response => response.json() as UserOrganization[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
