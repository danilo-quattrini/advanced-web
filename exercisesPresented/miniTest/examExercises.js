
//I will require the module for asking to join into my db
const mydb = require('./module-db-connection');
const express = require('express');
/* For use express we need to instace it */
const app = express();
// Setting pug as the view engine in this case pug not jade because is deprecated
app.set('view engine', 'pug');
// I'm setting where are saved my view engines in this case inside the folder itslef
app.set('views', './'); 
/* Save the query I'm going to use into a variable all the query are inside th app */
const outProducts = `SELECT * FROM products;`;
const createProducts = `CREATE TABLE products (ID INT, product_name VARCHAR(255), description VARCHAR(255), price INT);`;
const removeRecord = `DELETE FROM products WHERE ID = 2;`
const updateQuery = `UPDATE products SET price = '10' WHERE product_name = 'strawberry';`
const insertQuery = `INSERT INTO products (ID, product_name, description, price) VALUES ?`
const valuseQuery = [
  ['5', 'protein', 'something you are using with other ingridients', '3'],
  ['6', 'apple', 'fruit', '2'],
  ['7', 'lemon', 'fruit and vegetable', '5']
];
mydb.connect(function (err, result){
  /* Check if the connection is established */
  if(err) throw err;
  console.log('Database connected');
});

//Home page of the website
app.get('/', function(req, res){

  mydb.query(createProducts, function(err, result){
    res.render('index', {message: 'Welcome inside the shop',result})
  });
});

//I'm inserting inside the table some records
app.get('/insert-values', function(req, res){
  mydb.query(insertQuery,[valuseQuery],  function(err, result){
    res.render('result', {title : 'Inserted values inside the db', message: 'Values inserted successfully!', result})
  });
});

//Show me a list of product inside my db
app.route('/products').get(function(_req, res){
  mydb.query(outProducts, function(err, result){
    res.render('products', { title: 'Product List', products: result })
  });
});

//Remove record inside the table
app.get('/remove-record', function(req, res){
  mydb.query(removeRecord, function(err, result){
    res.render('remove', { title: 'Record remove from the db', message: 'Record removed successfully!', result });
  });
});
//Update the record are inside the table 
app.get('/update-record', function(req, res){
  mydb.query(updateQuery, function(err, result){
    //we are rendering the pug file inside the folder in case we want to show our product 
    res.render('update', {title: 'Updated succesfully', message: 'See the new update inside the table', result})
  });
});

const server = app.listen(3000, function(){
  console.log('Connection establishe with the server!');
  console.log('http://127.0.0.1:3000');
});

  /* 

  This one is the code for creating the tables inside the db that we are going to connect
   
  const sql = "CREATE TABLE products (ID INT, product_name VARCHAR(255), description VARCHAR(255), price INT);";
  connection.query(sql, (err, result) =>{
    if(err) throw err;
    console.log("Table created correctly!");
  }); 
 */



  /* 
  Adding values inside the table
  
  var insert = "INSERT INTO products (ID, product_name, description, price) VALUES ?"
  var values = [
    ['1', 'powder', 'something u use for  cooking', '3'],
    ['2', 'sigar', 'something that u smoke', '2'],
    ['3', 'strawberry', 'fruit that u eat with sweets', '5']
  ];
  connection.query(insert, [values], function(err, result){
    if(err) throw err;
    console.log(`Added the row into the table, numbers of rows ${result.affectedRows}`);
  }) */

