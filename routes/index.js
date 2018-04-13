module.exports = (server) => {
    server.use('/authentication', require('./authentications')(server));
};

server.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});
