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

exports.count = async (req, res) => {
    try{
      //  if (req.params.funcType === 'longest' || 'totals') {
            let data = await Activity.count(req.params.funcType, req.params.activityType);
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