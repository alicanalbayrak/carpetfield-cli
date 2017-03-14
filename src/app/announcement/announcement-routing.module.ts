import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {AnnouncementComponent} from './announcement.component';

const annoRoutes: Routes = [
  {path: 'announcement', component: AnnouncementComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(annoRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AnnouncementRoutingModule {
}
