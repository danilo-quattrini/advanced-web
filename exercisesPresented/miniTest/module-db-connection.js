/* I will call the necessary modules for my program */
const mysql = require('mysql');

  const conn = mysql.createConnection({
    host: 'localhost',
    user:  'root',
    password: '',
    database: ''
  });
module.exports = conn;