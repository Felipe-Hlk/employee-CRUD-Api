import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import Employee from '../classes/Employee';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {

  employee_id: any|string;

  employees: Employee[] = [];

  constructor ( private employeesService: EmployeesService ){}

  ngOnInit(): void{
    this.employeesService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.employees = data;
      });


  }

  deleteEmployee(arg0: any) {
    throw new Error('Method not implemented.');
    }


}



