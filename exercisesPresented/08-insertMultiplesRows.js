/* Export the module for connection to the DB */
const connection = require('./module-db-connection');

connection.connect(function(err, result){
  if(err) throw err;
  console.log("Connection established!");

  var insert = "INSERT INTO students (ID, Name, Age, Address, CF, email) VALUES ?"
  var values = [
    ['2', 'Elon Musk', '55', 'Los Angeles', '5411', 'elon@tesla.com'],
    ['3', 'Bill Gates', '62', 'San Francisco', '35255', 'bill@microsoft.com'],
    ['4', 'Jeff Bezos', '59', 'San Francisco', '354781', 'jeff@amazon.com']
  ];
  connection.query(insert, [values], function(err, result){
    if(err) throw err;
    console.log(`Added the row into the table, numbers of rows ${result.affectedRows}`);
  })
})