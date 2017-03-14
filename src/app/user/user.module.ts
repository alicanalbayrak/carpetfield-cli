import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {UserListComponent} from './user-list.component';
import {UserDetailComponent} from './user-detail.component';

import {UserRoutingModule} from './user-routing.module';
import {UserService} from './user.service';
import { ProfileComponent } from './profile.component';
import { UserMatchComponent } from './user-match.component';
import { UserOrganizationsComponent } from './user-organizations.component';
import { UserInvitationsComponent } from './user-invitations.component';
import { UserSettingsComponent } from './user-settings.component';
import { UserAnnouncementComponent } from './user-announcement.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [UserListComponent, UserDetailComponent, ProfileComponent, UserMatchComponent, UserOrganizationsComponent, UserInvitationsComponent, UserSettingsComponent, UserAnnouncementComponent],
  providers:[
    UserService
  ]
})
export class UserModule {
}
