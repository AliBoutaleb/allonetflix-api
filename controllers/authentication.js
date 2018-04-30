const sha1 = require('sha1');
const jwt = require('jsonwebtoken');

const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'allonetflix',
    password: 'postgres',
    port: 5432,
})

module.exports = (server) => {

        function login (req, res){
            const email = req.body.email;
            const password = req.body.password;

            //
            const query = {
                text: 'SELECT * FROM Member WHERE email=$1 and password=$2',
                values: [email, password]
            }

            client.connect(err => {
                if (err) {
                    console.log(err);
                    return;
                }
                client.query(query, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        const member = data.rows[0];
                        console.log(member);
                        if(member == undefined){
                            console.log("Les identifiants sont incorrect");
                        }else{
                            console.log("Vous êtes authentifié !");
                        }
                    }
                    client.end();
                });
            });
            res.send("end");
        }
        return{login};
};