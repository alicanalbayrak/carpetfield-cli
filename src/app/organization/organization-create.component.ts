import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organization-create',
  template: `
   <form>
    <div class="form-group">
      <label for="orgNameInput">Organization name:</label>
      <input type="text" class="form-control" id="orgNameInput" placeholder="Organization name">
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Description:</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <button type="submit" class="btn btn-success">Create</button>
    <button type="submit" class="btn btn-danger">Cancel</button>
  </form>
  `,
  styles: []
})
export class OrganizationCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
