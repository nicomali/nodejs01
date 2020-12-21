import http = require('http');
import repo = require('./repository.ts');



const port = process.env.port || 1337

let repository = new 

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);