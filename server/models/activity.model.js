const sql = require("../config/db");

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


Activity.longest = (activityType) => {
    return new Promise ((resolve, reject) => {
        sql.query(`call longest ("${activityType}")`, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return reject(err);
            }
            console.log("activities: ", results);
            return resolve(results);
        });
    });
};

Activity.totals = (activityType) => {
    return new Promise ((resolve, reject) => {
        console.log("activity type is: " +activityType);
        sql.query(`call totals ("${activityType}")`, (err, results) => {
            if (err) {
                console.log("error: ", err);
                return reject(err);
            }
            console.log("activities: ", results);
            return resolve(results);
        });
    });
};


module.exports = Activity;