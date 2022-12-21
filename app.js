const http = require('http'); //Cargando un Módulo de node.js
const rd = require ('./modules/retrievedata');
const url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("La fecha y hora es: " + rd.RetrieveDate());
  //res.write(req.url);
  const query = url.parse(req.url, true).query;
  const text = " " + query.year +" "+ query.month ;
  //res.end("Hoolaaa mundo!!!! ");
  res.end(text);
}).listen(8080);