import { Component } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import Employee from '../classes/Employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent {

  employees: Employee[] = [];

  constructor( private employeesService: EmployeesService ){

  }

  

}
