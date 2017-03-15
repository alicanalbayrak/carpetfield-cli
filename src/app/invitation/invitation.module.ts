import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitationComponent } from './invitation.component';

import {InvitationRoutingModule} from './invitation-routing.module';
import {InvitationService} from "./invitation.service";

@NgModule({
  imports: [
    CommonModule,
    InvitationRoutingModule
  ],
  declarations: [
    InvitationComponent
  ],
  providers: [
    InvitationService
  ]
})
export class InvitationModule { }
