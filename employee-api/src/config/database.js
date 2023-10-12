/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/**
 * arquivo: config/database.js
 * descrição: arquivo responsável pelas 'connectionStrings' (Cosmos DB & PostgreSQL)
 * data: 11/10/2023
 * autor: Felipe AP
 */

const { Pool } = require ('pg');
const dotenv = require ('dotenv');

dotenv.config();

//conexão com a Base de Dados:

const pool = new pool({
  connectionString: process.env.DATABASE_URL
});

pool.on( 'error', (err, client) => {
  console.log('Unexpected error on idle client', err)
  process.exit(-1);
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso')
});

module.exports = {
  query: (text, params) => pool.query(text, params),
}