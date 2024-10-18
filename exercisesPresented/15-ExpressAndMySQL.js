const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user:  'root',
  password: 'your_password',
  database: 'escoladb'
});

conn.connect(function(err, res){
  if(err) throw err;
  console.log('Connection established');
});