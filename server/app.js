const express = require('express');
const cors = require('cors');
const config = require('config');

const PORT = config.get('port') || 5000;

const app = express();

app.use(cors());
app.use(express.json());

require("./api-routes/activity.routes")(app);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT}`));
