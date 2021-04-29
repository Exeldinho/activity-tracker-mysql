const sql = require("../config/db");

const Activity = function(activity) {
    this.act_start = activity.act_start;
    this.act_finish = activity.act_finish;
    this.distance = activity.distance;
    this.act_type = activity.act_type;
};

Activity.create = (newActivity, result) => {
    sql.query("INSERT INTO activities SET ?", newActivity, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null); //?
            return;
        }

        console.log("Activity created with id: ", {id: res.insertId, ...newActivity});
        result(null, {id: res.insertId, ...newActivity});
    });
};

Activity.getAll = result => {
    sql.query("SELECT * FROM activities", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("activities: ", res);
        result(null, res);
    });
};

module.exports = Activity;