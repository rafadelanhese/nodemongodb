const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Infoeste 2018');
}).listen(3000, '127.0.0.1');

console.log('Servidor rodando na porta 3000');
