const sql = require("../config/db");
const config = require('config');

const DB_PROC = config.get('dbStoredProcedures');

const Activity = function(activity) {
    this.act_start = activity.act_start;
    this.act_finish = activity.act_finish;
    this.distance = activity.distance;
    this.act_type = activity.act_type;
};

Activity.create = (newActivity, result) => {
    return new Promise((resolve, reject) => {
        sql.query("INSERT INTO activities SET ?", newActivity, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return reject(err);
            }
            console.log("Activity created with id: ", { id: results.insertId, ...newActivity });
            return resolve(result({id: results.insertId, ...newActivity}));
        });
    })
};

Activity.getAll = () => {
    return new Promise ((resolve, reject) => {
        sql.query("SELECT * FROM activities", (err, results) => {
            if (err) {
                console.log("error: ", err);
                return reject(err);
            }
            console.log("activities: ", results);
            return resolve(results);
        });
    });
};

Activity.count = (procType, activityType) => {
    for (let i=0; i < DB_PROC.length; i++) {
        if (procType === DB_PROC[i]) {
            return new Promise((resolve, reject) => {
                sql.query(`call ${procType} ("${activityType}")`, (err, results) => {
                    if (err) {
                        console.log("error: ", err);
                        return reject(err);
                    }
                    console.log("activities: ", results);
                    return resolve(results);
                });
            });
        }
    }
    console.log("Wrong MySQL stored procedure name");
};

module.exports = Activity;