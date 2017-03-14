import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';

import {OrganizationRoutingModule} from './organization-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationRoutingModule
  ],
  declarations: [OrganizationComponent]
})
export class OrganizationModule { }
