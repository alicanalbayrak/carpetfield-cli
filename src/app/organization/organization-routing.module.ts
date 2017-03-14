import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {OrganizationComponent} from './organization.component';

const organizationRoutes: Routes = [
  {path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(organizationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationRoutingModule { }
