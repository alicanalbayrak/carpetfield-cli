import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router'

@Component({
  selector: 'app-organization',
  template: `
    <div class="page-header">
        <div class='btn-toolbar pull-right'>
          <div class='btn-group'>
            <button type='button' class='btn btn-primary' (click)="goToCreateOrganization()">Create Organization</button>
          </div>
        </div>
        <h1>Organization</h1>      
    </div>
    
    <router-outlet></router-outlet>
`
})

export class OrganizationComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

  }

  goToCreateOrganization() {
    console.log("deneme");
    this.router.navigate(['create'], { relativeTo: this.route });
  }

}
