import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {SettingComponent} from './setting.component';

const settingRoutes: Routes = [
  {path: 'settings', component: SettingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(settingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SettingRoutingModule { }
