import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'

import {Organization, OrganizationService} from './organization.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-organization-list',
  template: `
   <ul class="list-group">
      <li class="list-group-item" *ngFor="let organization of organizations | async"
        (click)="onSelect(organization)"
        [class.active]="isSelected(organization)">
          <span class="badge badge-info">{{ organization.id }}</span>
          {{ organization.name }}
      </li>
    </ul>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OrganizationListComponent implements OnInit {

  organizations: Observable<Organization[]>;

  private selectedId: number;

  constructor(private service: OrganizationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  isSelected(organization: Organization) {
    return organization.id === this.selectedId;
  }

  ngOnInit() {
    this.organizations = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getOrganizations();
      });
  }

  onSelect(organization: Organization){
    this.selectedId = organization.id;
    this.router.navigate([organization.id], {relativeTo: this.route});
  }

}
