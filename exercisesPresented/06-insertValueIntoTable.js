var mysql = require('mysql');

var connection= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3raepKnyDz",
  database: "escoladb"
});

connection.connect(function(err){
  if(err) throw err;
  console.log("Connection established!");

  var querysql = `INSERT INTO students (ID, Name, Age, Address, CF)
   VALUES ('1', 'Danilo', '21', 'Via Trieste n 17', '62012');`;

  connection.query(querysql, function(err, result){
    if(err) throw err;
    console.log("Valued insert into the table!");
  });
});