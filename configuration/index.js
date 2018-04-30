module.exports = (server) => {
    server.configuration = require('./configuration.json');
    server.queries = require('./queries.json');
};