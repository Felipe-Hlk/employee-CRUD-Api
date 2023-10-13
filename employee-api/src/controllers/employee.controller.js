/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * arquivo: controller/employee.routes.js
 * descrição: arquivo responsável pela lógica do CRUD (API - Employee)
 * data: 11/10/2023
 * autor: Felipe AP
 *datas em postgreeSql para fazer a tranformação = SELECT TO_CHAR(NOW() :: DATE, 'dd/mm/yyyy');
 */

const db = require('../config/database');

//=> Método responsável por criar um novo 'Employee':
exports.createEmployee = async (req, res) => {
  const { name, job_role, salary, birth, employee_registration } = req.body;
  const { rows } = await db.query(
    "INSERT INTO employee (name, job_role, salary, birth, employee_registration) VALUES ($1, $2, $3, $4, $5)",
    [name, job_role, salary, birth, employee_registration]
  );

  res.status(201).send({
    message: 'Employee added successfully!',
    body: {
      employee: { name, job_role, salary, birth, employee_registration },
    },
  });
};

//=> Método responsável por listar todos os 'Employees':
exports.listAllEmployees = async (req, res) => {
  const response = await db.query('SELECT * FROM employee ORDER BY name ASC');
  res.status(200).send(response.rows);
};

//=> Método responsável por listar um determinado 'Employee' por Id:
exports.findEmployeeById = async (req, res) => {
  const employeeId = req.params.id;
  const response = await db.query('SELECT * FROM employee WHERE employee_Id = $1', [employeeId]);
  res.status(200).send(response.rows);
}


//=> Método responsável por atualizar um determinado 'Employee' por Id:
exports.UpdateEmployeeById = async (req, res) => {
  const employeeId = req.params.id;
  const { name, job_role, salary, birth, employee_registration } = req.body;

  const response = await db.query( 
    'UPDATE employee SET name=$1, job_role=$2, salary=$3, birth=$4, employee_registration=$5 WHERE employee_Id = $6',
    [name, job_role, salary, birth, employee_registration, employeeId]
    );

    res.status(200).send({message: 'Employee Update Sucessfully'});

}