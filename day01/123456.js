console.log('hello world!');

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Someone visit our web server.');
});

server.listen(80, () => console.log('Server running on http://localhost'));
