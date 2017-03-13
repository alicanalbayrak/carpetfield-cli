/**
 * Created by alicana on 13/03/2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OrganizationsCenterComponent} from './organizations-center.component';
import {OrganizationHomeComponent} from './organization-home.component';
import {OrganizationListComponent} from './organization-list.component';
import {OrganizationDetailsComponent} from './organization-details.component';

import {AuthGuard} from '../auth/auth-guard.service'

const organizationsRoutes: Routes = [
  {
    path: 'organizations-center',
    component: OrganizationsCenterComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: OrganizationListComponent,
        children: [
          {
            path: ':id',
            component: OrganizationDetailsComponent
          },
          {
            path: '',
            component: OrganizationHomeComponent
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(organizationsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class OrganizationsRoutingModule {
}
