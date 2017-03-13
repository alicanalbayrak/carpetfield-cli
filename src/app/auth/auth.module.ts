import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from '@angular/forms'

import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {LoginComponent} from "./login.component";
import {SignupComponent} from "./signup.component";

import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule {
}
