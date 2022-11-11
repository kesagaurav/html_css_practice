import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  private employee:Employee
  constructor(private service:EmployeeService,private router : Router) {
    this.employee=new Employee();
   }

  ngOnInit(): void {
    this.addEmployee();
  }
  public addEmployee(){
    this.service.addEmployee(this.employee).subscribe(res=>{
      this.employee=new Employee();
      this.router.navigate(['/viewPlayers']);
    })
  }

}
