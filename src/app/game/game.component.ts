import {Component, OnInit} from '@angular/core';
import {Game} from "../shared/Game";
import {GameService} from './game.service';

@Component({
  selector: 'app-game',
  template: `
    <div class="page-header">
        <h1>Match</h1>      
    </div>
    
  <table class="table table-striped">
  <tr>
    <th>Organizasyon</th>
    <th>Mac</th>
    <th>Yer</th>
    <th>Zaman</th>
    <th></th>
    <th></th>
  </tr>
  <tr *ngFor="let game of games">
    <td>{{game.name}}</td>
    <td>{{game.description}}</td>
    <td>{{game.address}}</td>
    <td>{{game.timeOfStart}}</td>
    <td><button type="button" class="btn btn-success">Success</button></td>
    <td><button type="button" class="btn btn-danger">Danger</button></td>
  </tr>
</table>
`
})

export class GameComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.gameService.getAllGames()
      .then(games => this.games = games);
  }

}
