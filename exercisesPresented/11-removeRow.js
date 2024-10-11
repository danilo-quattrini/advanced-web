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

  var removeQuery = `DELETE FROM students WHERE ID = 1;`
  connection.query(removeQuery, function(err, result){
      if(err) throw err;
      console.log('Deleted the row!');
  });
});