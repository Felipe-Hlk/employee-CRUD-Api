import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {

  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,  public employeesService: EmployeesService ){
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({

      employeeName: ['', Validators.required],
      job_role: ['', Validators.required],
      salary: ['', Validators.required],
      birth: ['', Validators.required],
      employee_registration: ['', Validators.required]

    });
  }

  createNewEmployee(employeeName: string, job_role: string, salary: number, birth: Date, employee_registration: number) {
    this.employeesService.createNewEmployee(employeeName, job_role, salary, birth, employee_registration)

    };

}
