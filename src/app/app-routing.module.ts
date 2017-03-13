/**
 * Created by alicana on 13/03/2017.
 */
import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {NotFoundComponent} from './not-found.component'

const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
