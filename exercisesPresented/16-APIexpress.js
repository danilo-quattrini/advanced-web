const express = require('express');
const app = express();
const port = 8080
const mysql2 = require('mysql2');

app.get('/', (req, res) => res.json({message:`Welcome!`}))

app.listen(port);

function executeSQL(sqlQuery, res){
  const connection = require('./module-db-connection.js');
  connection.query(sqlQuery, (error, result, fields) => { 
    if(error) result.json(err);
    else result.json(res);
    connection.end();
    console.log('Query executed!');
  });
}

app.get('/students', (req, res) => {
  const outStudents = `SELECT * FROM students;`;
  executeSQL(outStudents, res);
});