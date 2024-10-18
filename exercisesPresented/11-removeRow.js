const connection = require('./module-db-connection');
connection.connect(function(err, result){
  if(err) throw err;
  console.log("Connection established!");

  var removeQuery = `DELETE FROM students WHERE ID = 1;`
  connection.query(removeQuery, function(err, result){
      if(err) throw err;
      console.log('Deleted the row!');
  });
});