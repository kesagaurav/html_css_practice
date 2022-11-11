import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


  employeeList:Employee[];
  employee:Employee;
  flag:boolean;
  constructor() {
    this.employeeList=[];
    this.employee=new Employee();
    this.flag=false;

   }


   addEmployee(){
     this.employeeList.push(this.employee);
     this.employee=new Employee();
     this.flag=true;
   }


}
