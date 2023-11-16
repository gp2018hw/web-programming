let http    = require('http');
let events  = require('events')
let emitter = new events.EventEmitter()
http.createServer(function(request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end('Hello World\n');
        emitter.emit('request_served');
}).listen(8081);
console.log('Server running on 8081');

let totalRequests = 0
requestServedHandler = function() {
    totalRequests++;
    console.log("Request served, total requests: " +  totalRequests);
}
emitter.addListener('request_served', requestServedHandler);