const Activity = require("../models/activity.model");

exports.create = (req, res) => {
    if (!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const activity = new activity({
        act_start: req.body.act_start,
        act_finish: req.body.act_finish,
        distance: req.body.distance,
        act_type: req.body.act_type
    });

    Activity.create(activity, (err, data) => {
        if (err)
            res.status(500).send ({
                message:
                    err.message || "Error to add new Activity to database"
            });
        else res.send(data);
    });
};

exports.findAll = (req, res) => {
    Activity.getAll((err, data) => {
        if (err)
            res.status(500).send ({
                message:
                    err.message || "Error to get all Activities from database"
            });
        else res.send(data);
    });
};