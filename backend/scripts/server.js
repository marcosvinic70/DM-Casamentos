var server = {
   
    http: require('http'),
    encoding: require('encoding')

}

const insecure = require('insecure');

insecure();

var email = require('./sendMail');

server.http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end();

}).listen(8080);