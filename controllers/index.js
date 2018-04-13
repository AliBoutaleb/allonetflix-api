module.exports = (server) => {
    server.controllers = {
        auth: require('./auth')(server),
    };
};