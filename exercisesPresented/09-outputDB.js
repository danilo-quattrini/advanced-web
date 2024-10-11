var mysql = require('mysql');

var connection = mysql.createConnection({
  
  host: "localhost",
  user: "root",
  password: "3raepKnyDz",
  database: "escoladb"

});

connection.connect(function(err, result){
  if(err) throw err;
  console.log("Connection established!");

  var selectQuery = "SELECT * FROM students;"
  connection.query(selectQuery, function(err, result){
      if(err) throw err;
      console.log('That\' the result of the SELECT query');
      console.log(result);
  });
});