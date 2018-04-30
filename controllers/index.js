module.exports = (server) => {
    server.controllers = {
        authentication: require('./authentication')(server),
        member: require('./member')(server),
    };
};