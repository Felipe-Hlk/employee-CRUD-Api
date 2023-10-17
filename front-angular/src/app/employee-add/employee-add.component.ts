import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent {

  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder ){
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

}
