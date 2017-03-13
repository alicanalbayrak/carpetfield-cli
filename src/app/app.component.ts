import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
      <app-navbar></app-navbar>
      
      <div class="container">
      
        <div class="starter-template">
          <router-outlet></router-outlet>
        </div>
      
      </div>
   `
})
export class AppComponent {
  title = 'app works!';
}
