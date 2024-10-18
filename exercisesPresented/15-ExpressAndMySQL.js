/* I will call the necessary modules for my program */
const mydb = require('./module-db-connection');
const express = require('express');
/* For use express we need to instace it */
const app = express();
/* Save the query I'm going to use into a variable */
const outStudents = `SELECT * FROM students;`;
const outTeachers = `SELECT * FROM teachers;`;

mydb.connect(function (err, result){
  /* Check if the connection is established */
  if(err) throw err;
  console.log('Database connected');
});

app.route('/students').get(function(_req, res){
  mydb.query(outStudents, function(err, result){
    res.send(result)
  });
});

app.route('/teachers').get((err, res)=>{
  mydb.query(outTeachers, (err, result)=>{
    res.send(result);
  });
});
app.get('/', function(req, res){
  res.send('Welcome to the class!');
});

const server = app.listen(3000, function(){
  console.log('Connection establishe with the server!');
  console.log('http://127.0.0.1:3000');
});