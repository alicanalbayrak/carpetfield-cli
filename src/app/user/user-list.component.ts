import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {User, UserService} from './user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>USERS</h2>
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users | async"
        [class.active]="isSelected(user)"
        (click)="onSelect(user)">
        <span class="badge badge-default badge-pill">Id: {{ user.id }}</span> {{ user.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  users: Observable<User[]>;

  private selectedUserId: number;

  constructor(private service: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.users = this.route.params.switchMap((params: Params) => {
      this.selectedUserId = +params['id'];
      return this.service.getUsers();
    });
  }


  isSelected(user: User) {
    return user.id === this.selectedUserId;
  }

  onSelect(user: User) {
    this.router.navigate(['/user', user.id]);
  }

}
