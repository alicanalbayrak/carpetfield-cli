import {Injectable} from '@angular/core';


export class Organization {
  constructor(public id: number, public name: string) {
  }
}

const ORGANIZATIONS = [
  new Organization(1, 'Şentepe - Ulus Hattı'),
  new Organization(2, 'Ayss Carpenters')
];

let organiazationsPromise = Promise.resolve(ORGANIZATIONS);

@Injectable()
export class OrganizationService {

  constructor() {
  }

  getOrganizations(){
    return organiazationsPromise;
  }

  getOrganization(id: number | string){
    return organiazationsPromise
      .then(organizations => organizations.find(organization => organization.id === +id));
  }

  addOrganization(name: string){
    name = name.trim();
    if(name){
      // TODO
      let organization = new Organization(++ORGANIZATIONS.length,name);
      organiazationsPromise.then(organizations => organizations.push(organization));
    }
  }
}
