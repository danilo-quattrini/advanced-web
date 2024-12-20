/* Export the module for connection to the DB */
const connection = require('./module-db-connection');
connection.connect(function(err, result){
  if(err) throw err;
  console.log("Connection established!");

  var updateQuery = `UPDATE students SET Address = 'New York' WHERE Name = 'Jeff Bezos';`
  connection.query(updateQuery, function(err, result){
      if(err) throw err;
      console.log('Updated completed!');
  });
});