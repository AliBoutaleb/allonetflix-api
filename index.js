var express = require('express');
var server = express();

//
require('./configuration')(server);
require('./middlewares')(server);
require('./controllers')(server);
require('./routes')(server);

// Server listen
console.log('The server', server.configuration.name,' is listening on port ', server.configuration.port);
server.listen(server.configuration.port);