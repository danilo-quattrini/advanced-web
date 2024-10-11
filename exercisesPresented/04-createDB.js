var mysql = require('mysql');

var connection = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "3raepKnyDz"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connection established!");
  var query = "CREATE DATABASE escoladb";
  connection.query(query, function(err, result){
      if(err) throw err;
      console.log("DB created correctly!");
  });
});