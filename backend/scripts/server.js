var server = {
   
    http: require('http'),
    encoding: require('encoding')

}

var email = require('./sendMail');
const insecure = require('insecure');

insecure();

server.http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});

    if(!email.sendMail())
        res.write("Seloco");
    res.end();

}).listen(8080);