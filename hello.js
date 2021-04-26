var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Github -> Docker -> Image -> Containers');
}).listen(8080);