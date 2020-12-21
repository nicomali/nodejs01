'use strict';
var http = require('http');
var url = require('url');
var repo = require('./repository');

var port = process.env.PORT || 1337;


async function start() {
    var permissionedResult = await repo.isPermissioned('nem', 'nem');

    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        var response = 'Hello World\n';
        var parsed = url.parse(req.url, true);
        var query = parsed.query;
        response += query.id + '\n';
        response += 'Has access: ' + permissionedResult;
        console.log('Req: ' + req.headers.authorization);
        res.end(response);
    }).listen(port);
}

start();

