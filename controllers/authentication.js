const sha1 = require('sha1');
const jwt = require('jsonwebtoken');
const { Client } = require('pg')


module.exports = (server) => {

        // Login from Email and Password
        function login (req, res){
            // Query
            const query = server.queries.getUserFromEmailAndPassword;
            const values = [req.body.email, req.body.password];

            // Connection to database
            const client = new Client(server.configuration.database)
            client.connect()
            // Send query
            client.query(query, values, (q_err, q_res) => {
                if (q_err) {
                    console.log(q_err.stack)
                } else {
                    const member = q_res.rows[0];
                    if(member == undefined){
                        res.send("Identifiants incorrect")
                    }else {
                        res.send(q_res.rows[0])
                    }
                }
                // Close connection
                client.end()
            })
        }
        return{login};
};