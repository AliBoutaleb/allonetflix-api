module.exports = (server) => {

    // Hello world
    server.get('/', function(req, res) {
        res.send('Hello world !');
    });

    // Authentication
    server.post('/login',
        server.middlewares.bodyParser.json(),
        server.middlewares.ensureBodyFields(['email', 'password']),
        server.controllers.authentication.login
    );
};
