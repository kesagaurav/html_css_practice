import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

import { ListOfEmployeesComponent } from './list-of-employees.component';



const routes: Routes = [
  { path: 'addEmployee', component: CreateEmployeeComponent },
  // { path: 'updatePlayer', component: UpdatePlayerComponent },
  // { path: 'deletePlayer', component: DeletePlayerComponent },
  { path: 'viewPlayers', component: ListOfEmployeesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
