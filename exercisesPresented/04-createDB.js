/* Export the module for connection to the DB */
const connection = require('./module-db-connection');

connection.connect(function(err){
  if(err) throw err;
  console.log("Connection established!");
  var query = "CREATE DATABASE escoladb";
  connection.query(query, function(err, result){
      if(err) throw err;
      console.log("DB created correctly!");
  });
});