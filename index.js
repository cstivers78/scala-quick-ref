var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url')

var mediaTypes = {
  '.md'    : 'text/markdown',
  '.html'  : 'text/html',
  '.css'   : 'text/css',
  '.js'    : 'application/javascript'
}

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname.replace(/\.\.\//g,'');
  var filename = path.resolve(pathname=='/' ? 'index.html' : pathname.substr(1));
  console.log(filename)
  path.exists(filename, function(exists) {
    switch(exists) {
      case true: return function(){
        fs.readFile(filename, function(err,data) {
          switch(err==undefined) {
            case true: return function(){
              res.writeHead(200,{'Content-Type': mediaTypes[path.extname(filename)]});
              res.end(data);
            }();
            case false: return function(){
              res.writeHead(500);
              res.end();
            }();
          }
        })
      }();
      case false: return function(){
        res.writeHead(404);
        res.end();
      }();
    }
  });
  
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');