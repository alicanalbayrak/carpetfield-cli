import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';

import {OrganizationRoutingModule} from './organization-routing.module';
import {OrganizationService} from "./organization.service";

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [
    OrganizationComponent
  ],
  providers: [
    OrganizationService
  ]
})
export class OrganizationModule { }
