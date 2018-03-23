var http = require('http');
var server = new http.Server();
var port = 4000;

/*
server.on('request', (request, response) => {
    console.log('=========== REQUEST ===========');
    console.log('Url: ', request.url);
    console.log('Method: ', request.method);
    console.log('User-agent: ', request.headers['user-agent']);
    response.writeHead(200, {
        'Content-type': 'text/plain'
    });
    response.end('Ciao Nico, sei troppo forte!');
});
server.listen(port);
*/


http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('Ciao Nico, sei troppo giusto!');
}).listen(port);