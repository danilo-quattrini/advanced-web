const http = require('http');
const fs = require('fs');
const url = require('url');

/* Create a server */

http.createServer(function (request, response){
  // Interpretate the request
  const pathname = url.parse(request.url).pathname;

  // Print the name of the  file
  console.log('Request for' + pathname + 'recived.');

  // Read the file that is inside the path
  fs.readFile(pathname.substring(1), function(err, data){
    /* 
      If there is any type of error is going to notice that
      and response with the status 404: NOT FOUND 
    */
    if(err){
      console.log(err);
      response.writeHead(404, {'Content-Type': 'text/html'});
    }else{
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data.toString());        
    }
    response.end();
  });
  
}).listen(8081);

/*
After you open the web page you should write in the uri also the 
.html file that you created before 
 */
console.log('Server is running at http://127.0.0.1:8081/');
