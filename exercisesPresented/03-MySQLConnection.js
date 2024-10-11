var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "3raepKnyDz"
});

con.connect(function(err) {
  if(err) throw err;
  console.log("Connected!");
});