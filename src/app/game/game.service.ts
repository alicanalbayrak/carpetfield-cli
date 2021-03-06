import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Game} from "../shared/Game";

@Injectable()
export class GameService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getAllGames(): Promise<Game[]> {
    return this.http.get("http://localhost:8080/games")
      .toPromise()
      .then(response => response.json() as Game[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
