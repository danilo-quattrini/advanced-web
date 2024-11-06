let express = require('express');
let app = express();

app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index', {title: 'IslaGaia', message: 'Welcome!'})
});

let server = app.listen(3000, function(){
  console.log('NodeJS server is running..');
});