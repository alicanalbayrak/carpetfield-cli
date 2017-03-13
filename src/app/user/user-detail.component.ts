import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {User, UserService}  from './user.service';

@Component({
  selector: 'app-user-detail',
  template: `
      <h2>USER</h2>
      <div *ngIf="user">
        <h3>"{{ user.name }}"</h3>
        <div>
          <label>Id: </label>{{ user.id }}</div>
        <div>
          <label>Name: </label>
          <input [(ngModel)]="user.name" placeholder="name"/>
        </div>
        <p>
          <button (click)="gotoUsers()">Back</button>
        </p>
      </div>
  `,
  styles: []
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: UserService) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.service.getUser(+params['id']))
      .subscribe((user: User) => this.user = user);
  }
  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    this.router.navigate(['/users', { id: userId }]);
  }


}
