import {Component, OnInit} from '@angular/core';
import {Match} from './Match';

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
    <td>{{game.organization}}</td>
    <td>{{game.match}}</td>
    <td>{{game.place}}</td>
    <td>{{game.date}}</td>
    <td><button type="button" class="btn btn-success">Success</button></td>
    <td><button type="button" class="btn btn-danger">Danger</button></td>
  </tr>
</table>
`
})

export class GameComponent implements OnInit {

  games = [
      new Match("AYESAS", "Haftalık maçımız", "kılıçarslan", "10 aralık"),
      new Match("GOOGLE", "Aylık maçımız", "Nevada", "12 aralık")
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
