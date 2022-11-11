import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';

const routes: Routes = [
  {path:'',component:AddEmployeeComponent},
  {path:'/viewEmployees',component:ListOfEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
