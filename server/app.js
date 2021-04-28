const mysql = require('mysql');

//configuration for connection to db
const con = mysql.createConnection ({
    host: "localhost",
    user: "user_tracker",
    database: "activity_tracker",
    password: "secret_password"

});

con.connect( err => {
    if (err) {
        console.log(err);
        return err;
    }
    else {
        console.log("mySQL database connected");
    }
});

let query="SELECT * FROM activities";
con.query(query, (err, result, field) => {
    console.log(err);
    console.log(result);
    console.log(field);
});
