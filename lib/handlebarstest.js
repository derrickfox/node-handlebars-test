var http = require('http');
var fs = require('fs');

/*
 * handlebarstest
 * https://github.com/foxdm2/handlebarstest
 *
 * Copyright (c) 2019, 
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module Dependencies
 */

/**
@class handlebarstest
 */

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible for say Hello
 *
 * @example
 *
 *     handlebarstest.awesome('livia');
 *
 * @method awesome
 * @param {String} name Name of People
 * @return {String} Returns hello name
 */

exports.awesome = function (name) {
  return 'hello ' + name;
};

var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   console.log('log works')
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8081); //the server object listens on port 8081

http.createServer(function(req, res){
  fs.readFile('test.html',function (name, data){
      // res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
      res.write(data);
      res.end();
  });
}).listen(8082);

