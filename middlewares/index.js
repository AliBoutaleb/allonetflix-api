module.exports = (server) => {
    server.middlewares = {

        // Parse request body
        bodyParser: require('body-parser'),

        // Ensure there's no missing fields in requests
        ensureBodyFields: require('./ensureBodyFields'),

        // Ensure user is authenticate
        ensureAuthenticated: require('./ensureAuthenticated')(server)
    }
};