/* Export the module for connection to the DB */
const connection = require('./module-db-connection');

connection.connect(function(err){
  if(err) throw err;
  console.log("Connection established!");

/*   
  Script for add a primary key
  
  var addKey = `ALTER TABLE students
  ADD PRIMARY KEY (ID);`;
  connection.query(addKey, function(err, result){
    if(err) throw err;
    console.log("Key changed to primary one!");
  });
 */
  var addField = `ALTER TABLE students
  ADD email VARCHAR(255);`;
  connection.query(addField, function(err, result){
    if(err) throw err;
    console.log("Field added to the table.");
  });
});