import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';

import {OrganizationRoutingModule} from './organization-routing.module';
import {OrganizationService} from "./organization.service";
import { OrganizationListComponent } from './organization-list.component';
import { OrganizationCreateComponent } from './organization-create.component';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationComponent,
    OrganizationListComponent,
    OrganizationCreateComponent
  ],
  providers: [
    OrganizationService
  ]
})
export class OrganizationModule { }
