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

  var updateQuery = `UPDATE students SET Address = 'New York' WHERE Name = 'Jeff Bezos';`
  connection.query(updateQuery, function(err, result){
      if(err) throw err;
      console.log('Updated completed!');
  });
});