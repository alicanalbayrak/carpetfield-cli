import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing module
import { OrganizationsRoutingModule } from './organizations-routing.module';

// service
import {OrganizationService} from './organization.service';

// components
import { OrganizationsCenterComponent } from './organizations-center.component';
import { OrganizationHomeComponent } from './organization-home.component';
import { OrganizationListComponent } from './organization-list.component';
import { OrganizationDetailsComponent } from './organization-details.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationsRoutingModule
  ],
  declarations: [
    OrganizationsCenterComponent,
    OrganizationHomeComponent,
    OrganizationListComponent,
    OrganizationDetailsComponent
  ],
  providers: [
    OrganizationService
  ]
})
export class OrganizationModule { }
