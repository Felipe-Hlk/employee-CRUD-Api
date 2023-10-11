/* eslint-disable no-undef */
/**
 * arquivo: app.js
 * descrição: arquivo responsável pela chamada da API no lado do back-end
 * data: 11/10/2023
 * autor: Felipe AP
 */

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure',
    version: '1.0.0'
  });
});

module.exports = router;