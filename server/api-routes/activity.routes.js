module.exports = (app) => {
    const activities = require("../controllers/activity.controller");

    app.post("/", activities.create);

    app.get("/", activities.findAll);

    app.get("/longest", activities.longest);

    app.get("/totals:aType", activities.totals);
};