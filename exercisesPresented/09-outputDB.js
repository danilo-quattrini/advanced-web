/* Export the module for connection to the DB */
const connection = require('./module-db-connection');

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