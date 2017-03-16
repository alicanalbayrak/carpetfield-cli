import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {OrganizationComponent} from './organization.component';
import {OrganizationListComponent} from './organization-list.component';
import {OrganizationCreateComponent} from './organization-create.component';

const organizationRoutes: Routes = [
  {
    path: 'organization',
    component: OrganizationComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: OrganizationListComponent, pathMatch: 'full'},
      {path: 'create', component: OrganizationCreateComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(organizationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrganizationRoutingModule {
}
