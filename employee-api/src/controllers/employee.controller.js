/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * arquivo: controller/employee.routes.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * data: 11/10/2023
 * autor: Felipe AP
 */

const db = require('../config/database');

//=> Método responsável por criar um novo 'Employee':

exports.createEmployee = async(req, res) => {
  const{name, job_role, salary, birth, employee_registration} = req.body;
  const{rows} = await db.query(
    "INSERT INTO emploee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)"
    [name, job_role, salary, birth, employee_registration]
  );

  res.status(201).send({
    message: 'Employee added sucessfully!',
    body: {
      employee: { name, job_role, salary, birth, employee_registration }
    },
  });
    
  
};


