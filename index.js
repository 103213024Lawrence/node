var http = require("http");
var request = require("request");
http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    //resp.write("hello world");
    
    /*
    request('http://www.google.com', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('body:', body); // Print the HTML for the Google homepage.    
    });
    */
    request.post('http://ycchen.im.ncnu.edu.tw/join.php', {form:{name:'Lawrence'}}, function(error, response, body){
        //console.log('error:', error);
        resp.write(body);
        resp.end();
    });
}).listen(8080);