import {Component, OnInit} from '@angular/core';
import {Organization} from "../shared/Organization";
import {OrganizationService} from './organization.service';

@Component({
  selector: 'app-organization',
  template: `
    <div class="page-header">
        <h1>Organization</h1>      
    </div>
    
    <table class="table table-striped">
      <tr>
        <th>Organizasyon</th>
        <th>Zaman</th>
        <th></th>
      </tr>
      <tr *ngFor="let org of organizations">
        <td>{{org.name}}</td>
        <td>{{org.description}}</td>
        <td><button type="button" class="btn btn-success">Success</button></td>
      </tr>
    </table>`
})

export class OrganizationComponent implements OnInit {

  organizations: Organization[];

  constructor(private organizationService: OrganizationService) {
  }

  ngOnInit() {
    this.organizationService.getAllOrganizations()
      .then(orgs => this.organizations = orgs);
  }

}
