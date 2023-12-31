/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
 * arquivo: employee.routes.js
 * descrição: arquivo responsável pelas rotas da API
 * data: 11/10/2023
 * autor: Felipe AP
 */

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

// => Definindo as rotas do CRUD - 'Employee'

// => Rota responsável por criar um novo Colaborador(a): (Post): localhost:3000/api/employees
router.post('/employees', employeeController.createEmployee);

// => Rota responsável por listar todos os Colaboradores: (GET): localhost:3000/api/employees
router.get('/employees', employeeController.listAllEmployees);

// = > Rota responsável por listar um Colaborador(a) por Id: (GET): localhost:3000/api/employees/Id
router.get('/employees/:id', employeeController.findEmployeeById);

// = > Rota responsável por atualizar um determinado Colaborador(a) por Id: (PUT): localhost:3000/api/employees/Id
router.put('/employees/:id', employeeController.UpdateEmployeeById);

// = > Rota responsável por deletar/excluir um determinado Colaborador(a) por Id: (PUT): localhost:3000/api/employees/Id
router.delete('/employees/:id', employeeController.deleteEmployeeById);


module.exports = router;