var http = require("http");
http.createServer(function (request, response) 
{  // Envia cabeçalho HTTP 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
    
   // Envia a resposta "Hello World"
   response.end('Hello World\n');
}).listen(8081);
 
// Imprime mensagem no console
console.log("Server running at http://127.0.0.1:8081/");