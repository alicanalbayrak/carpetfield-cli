import {Component} from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
      <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="error-template">
                  <h1>Oops!</h1>
                  <h2>404 Not Found</h2>
                  <div class="error-details">Sorry, an error has occured, Requested page not found!</div>
                  <div class="error-actions">
                      <a class="btn btn-primary btn-lg"><i class="fa fa-home" aria-hidden="true"></i>Take Me Home </a>
                      <a class="btn btn-primary btn-lg"><i class="fa fa-envelope" aria-hidden="true"></i> Contact Support </a>
                  </div>
              </div>
          </div>
      </div>
    </div>
    
  `,
  styles: [`
    .error-template {padding: 40px 15px;text-align: center;}
    .error-actions {margin-top:15px;margin-bottom:15px;}
    .error-actions .btn { margin-right:10px; color: #eeeeee;   }
`]
})
export class NotFoundComponent {

  constructor() {
  }

}
