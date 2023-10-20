/**
 * arquivo: app/services/employees.service
 * descrição: arquivo responsável por realizar transições de request entre o Back => Front
 * data: 18/10/2023
 * autor: Felipe AP
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = 'http://localhost:3000/api'; // Vindo do BackEnd

  constructor(private http: HttpClient) {}

  createNewEmployee(name: string, job_role: string, salary: number, birth: Date, employee_registration: number) {
    const employee = {
      name,
      job_role,
      salary,
      birth,
      employee_registration
    };

    console.log(employee);

    // (POST - URL no Back-End): http://localhost:3000/api/employees
    this.http.post(`${this.uri}/employees`, employee)
      .subscribe((res: any) => console.log('Feito'));
  }
}


