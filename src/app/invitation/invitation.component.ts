import {Component, OnInit} from '@angular/core';
import {Invitation} from "../shared/Invitation";
import {InvitationService} from './invitation.service';

@Component({
  selector: 'app-invitation',
  template: `
    <div class="page-header">
        <h1>Invitation</h1>      
    </div>
    
    <table class="table table-striped">
      <tr>
        <th>Invitation Context</th>
        <th>Game</th>
        <th></th>
      </tr>
      <tr *ngFor="let invitation of invitations">
        <td>{{invitation.context}}</td>
        <td>{{invitation.game.name}}</td>
        <td><button type="button" class="btn btn-success">Success</button></td>
      </tr>
    </table>
`
})
export class InvitationComponent implements OnInit {

  invitations: Invitation[];

  constructor(private invitationService: InvitationService) {
  }

  ngOnInit() {
    this.invitationService.getAllInvitations()
      .then(invs => this.invitations = invs);
  }

}
