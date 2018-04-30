const sha1 = require('sha1');
const { Client } = require('pg')

module.exports = (server) => {

    // Login from Email and Password
    function add (req, res){
        // Query
        const query = server.queries.addMember;
        const values = [
            req.body.lastname, req.body.firstname, req.body.email,
            req.body.pseudonyme, sha1(req.body.password), req.body.birthdate,
            req.body.country, new Date(), new Date(), req.body.gender];

        // Connection to database
        const client = new Client(server.configuration.database)
        client.connect()
        // Send query
        client.query(query, values, (q_err, q_res) => {
            if (q_err) {
                res.status(q_err.code || 500).send(q_err.reason || err);
            } else {
                res.status(201).send("Insert done !");
            }
            // Close connection
            client.end()
        })
    }

    // Return functions
    return{add};
};