import { Component, OnInit } from '@angular/core';
import {OrganizationService, UserOrganization} from './organization.service';

@Component({
  selector: 'app-organization-list',
  template: `
    <table class="table table-striped">
      <tr>
        <th>Organizasyon</th>
        <th>Sahip</th>
        <th></th>
      </tr>
      <tr *ngFor="let org of organizations">
        <td>{{org.name}}</td>
        <td><span *ngIf="org.owner">true</span><span *ngIf="!org.owner">false</span></td>
        <td><button type="button" class="btn btn-success">Success</button></td>
      </tr>
    </table>
  `,
  styles: []
})
export class OrganizationListComponent implements OnInit {

  organizations: UserOrganization[];


  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
    this.organizationService.getAllOrganizations()
      .then(orgs => {
        console.log(orgs);
        this.organizations = orgs;
      });
  }

}
