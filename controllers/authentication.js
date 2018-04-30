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
                    // Get member
                    const member = q_res.rows[0];
                    if(member == undefined){
                        res.send("Identifiants incorrect !")
                    }else{
                        // Create and send jwt token
                        jwt.sign({id:member.id}, server.configuration.salt, {expiresIn: 60 * 60}, (err, encryptedToken) =>{
                            if(err){
                                res.send(err)
                            }
                            res.send(encryptedToken)
                        });
                    }
                }
                // Close connection
                client.end()
            })
        }

        // Return functions
        return{login};
};