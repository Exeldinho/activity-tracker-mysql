const Activity = require("../models/activity.model");

exports.create = async (req, res) => {
    if (!req.body){
        res.sendStatus(400).send({
                message: "Content can not be empty!"
        });
    }

    const activity = new Activity({
        act_start: req.body.act_start,
        act_finish: req.body.act_finish,
        distance: req.body.distance,
        act_type: req.body.act_type
    });

    await Activity.create(activity, (err, data) => {
        try {
            res.send(data);
        }
        catch (err) {
            res.sendStatus(500).send({
                message:
                    err.message || "Error to add new Activity to database"
            });
        }
    });
};

exports.findAll = async (req, res) => {
    try{
        let data = await Activity.getAll();
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500).send({
            message:
                err.message || "Error to get all Activities from database"
        })
    }
};

exports.longest = async (req, res) => {
    try{
        let data = await Activity.longest();
        res.json(data);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500).send({
            message:
                err.message || "Error to get longest Activities from database"
        })
    }
};

exports.totals = async (req, res) => {
    try{
        let data = await Activity.totals(req.params.aType);
        res.send(data);
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500).send({
            message:
                err.message || "Error to get results of total distance from database"
        })
    }
};