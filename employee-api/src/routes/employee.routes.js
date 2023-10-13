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

// => Rota responsável por criar um novo 'Colaborador(a)': (Post): localhost:3000/api/employees

router.post('/employees', employeeController.createEmployee);


module.exports = router;