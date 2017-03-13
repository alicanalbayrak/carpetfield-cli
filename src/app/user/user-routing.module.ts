import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuard} from '../auth/auth-guard.service'

import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

const usersRoutes: Routes = [
  { path: 'users',  component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'user/:id', component: UserDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule { }





