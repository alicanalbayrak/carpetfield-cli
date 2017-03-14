import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../auth/auth-guard.service';

import {UserListComponent} from './user-list.component';
import {ProfileComponent} from './profile.component';
import {UserInvitationsComponent} from './user-invitations.component';
import {UserMatchComponent} from './user-match.component';
import {UserOrganizationsComponent} from './user-organizations.component';
import {UserAnnouncementComponent} from './user-announcement.component';
import {UserSettingsComponent} from './user-settings.component';

const usersRoutes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [AuthGuard]},
  {
    path: 'user/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'matches',
        component: UserMatchComponent
      },
      {
        path: 'invitations',
        component: UserInvitationsComponent
      },
      {
        path: 'organizations',
        component: UserOrganizationsComponent
      },
      {
        path: 'announcements',
        component: UserAnnouncementComponent
      },
      {
        path: 'settings',
        component: UserSettingsComponent
      },
      {
        path: '',
        component: UserMatchComponent
      }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {
}





