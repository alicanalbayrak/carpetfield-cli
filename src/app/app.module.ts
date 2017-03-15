import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {NotFoundComponent} from "./not-found.component";
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth/auth.service";
import {UserService} from './auth/user.service';

// new form
import {GameModule} from './game/game.module';
import {OrganizationModule} from './organization/organization.module';
import {AnnouncementModule} from './announcement/announcement.module';
import {InvitationModule} from './invitation/invitation.module';
import {SettingsModule} from './settings/settings.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GameModule,
    OrganizationModule,
    AnnouncementModule,
    InvitationModule,
    SettingsModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
