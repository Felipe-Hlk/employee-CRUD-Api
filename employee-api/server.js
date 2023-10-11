/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * arquivo; server.js
 * descrição: arquivo responsável por toda configuração e execução do Back-End('Employee')
 * data: 11/10/2023
 * autor: Felipe AP
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});