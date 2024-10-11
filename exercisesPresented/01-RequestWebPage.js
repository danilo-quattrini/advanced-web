/* We are calling the module request for get known about the page */
var request = require("request");

request("https://www.islagaia.pt", function(error,response,body){
    //console.log(body);    
    console.log(response);
});
    