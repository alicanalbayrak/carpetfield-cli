import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {InvitationComponent} from './invitation.component';

const invitationRoutes: Routes = [
  {path: 'invitation', component: InvitationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(invitationRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class InvitationRoutingModule {
}
