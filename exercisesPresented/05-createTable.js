var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "3raepKnyDz",
    database: "escoladb"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connection established!");
  var query = "CREATE TABLE students (ID INT, Name VARCHAR(255), Age INT(3), Address VARCHAR(255), CF VARCHAR(50));";
  connection.query(query, function(err, result){
      if(err) throw err;
      console.log("Table created correctly!");
  });
});