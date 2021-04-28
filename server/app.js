const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const config = require('config');

const app = express();

app.use(bodyparser.json);

const PORT = config.get('port') || 5000;
const dbConfig = config.get('mySQL.dbConfig');


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

const activitiesRouter = require('./api-routes/activity.routes');

app.use('/', activitiesRouter)

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));

module.exports = connection;
