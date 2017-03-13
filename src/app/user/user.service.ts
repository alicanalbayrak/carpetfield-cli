import {Injectable} from '@angular/core';

export class User {
  constructor(public id: number, public name: string) {
  }
}

let USERS = [
  new User(1, 'alican'),
  new User(2, 'selcuk'),
  new User(3, 'seckin')
];

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {

  getUsers() {
    return usersPromise;
  }

  getUser(id: number | string){
    return usersPromise
      .then(users => users.find(user => user.id === +id));
  }

}
