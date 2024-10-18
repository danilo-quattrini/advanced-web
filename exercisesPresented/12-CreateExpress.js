let express = require('express');
let app = express();

app.route('/students').get(function (_req, res){
  res.send('List of students');  
});
app.route('/teachers').get(function (_req, res){
  res.send('List of teachers');
});
app.get('/', function(req, res){
  res.send('Hello World!');
});

var server = app.listen(3000, function(){});