const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

require("./api-routes/activity.routes")(app);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));
