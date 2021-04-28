const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
const config = require('config');

const app = express();

app.use(bodyparser.json);

const PORT = config.get('port') || 5000;
const dbConfig = config.get('mySQL.dbConfig');


const con = mysql.createConnection ({
    host: dbConfig.host,
    user: dbConfig.user,
    database: dbConfig.database,
    password: dbConfig.password,
    multipleStatements: dbConfig.multipleStatements

});

con.connect( err => {
    if (!err) {
        console.log("mySQL database connected");
    }
    else {
        console.log("Connection to database failed \n Error : " + JSON.stringify(err, undefined, 2));
        return err;
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


let query="SELECT * FROM activities";
con.query(query, (err, result, field) => {
    console.log(err);
    console.log(result);
    //console.log(field);
    console.log(result[0]['distance'])
});

con.end(err => { //need to add async await
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("Connection to database closed");
    }
});