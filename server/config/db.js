const mysql = require("mysql");
const dbConfig = require('../config/db.config');

const connection = mysql.createConnection ({
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    password: dbConfig.password,
    multipleStatements: dbConfig.multipleStatements

});

connection.connect( err => {
    if (!err) {
        console.log("mySQL database connected");
    }
    else {
        console.log("Connection to database failed \n Error : " + JSON.stringify(err, undefined, 2));
        return err;
    }
});

module.exports = connection;
