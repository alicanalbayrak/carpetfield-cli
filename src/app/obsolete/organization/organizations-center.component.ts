import { Component } from '@angular/core';

@Component({
  selector: 'app-organizations-center',
  template: `
    <h2>Organization Center</h2>
    <br>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class OrganizationsCenterComponent  {

  constructor() { }

}
