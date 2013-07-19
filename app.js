/*****************************************************************************/
/* Setup of all node-modules needed, etc*/
/*****************************************************************************/

var express = require("express");	// imports express

var app = express()
http = require('http')
server = http.createServer(app)

var fs = require('fs');
express = require('express')

app.configure(function(){
// the bodyParser middleware allows us to parse the
// body of a request
  app.use(express.bodyParser());
  app.use(express.logger());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
});

app.get('/', function(request, response) {
  response.sendfile("index.html");
});

// Finally, activate the server at port 8889
app.listen(8889);
