var express = require('express');
var server = express();

require('./configuration')(server);



// Server listen
console.log('The server', server.configuration.name,' is listening on port ', server.configuration.port);
server.listen(server.configuration.port);