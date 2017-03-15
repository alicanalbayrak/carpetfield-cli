import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

import {GameRoutingModule} from './game-routing.module';
import {GameService} from "./game.service";

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [
    GameComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
