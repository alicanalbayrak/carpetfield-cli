import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

import {GameComponent} from './game.component';

const gameRoutes: Routes = [
  {path: 'game', component: GameComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }
