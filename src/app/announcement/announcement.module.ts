import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnnouncementComponent} from './announcement.component';

import {AnnouncementRoutingModule} from './announcement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AnnouncementRoutingModule
  ],
  declarations: [
    AnnouncementComponent
  ]
})
export class AnnouncementModule {
}
