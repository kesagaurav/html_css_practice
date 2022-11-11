import { FirstComponent } from './first/first.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';


const routes: Routes = [
  {
    path: 'first' , component:FirstComponent
  },
  {
    path: 'second' , component:SecondComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
