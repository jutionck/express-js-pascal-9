const express = require('express');
const config = require('../config/config');
const errorRoute = require('./routes/error.route');
const noRoute = require('./routes/no.route');
const jsonMiddleware = require('./middleware/json.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const appRoute = require('./routes/index');
require('dotenv').config();
const app = express();

const Server = () => {
    const { port, host } = config();
    app.use(jsonMiddleware);
    app.use(appRoute);
    app.use(errorRoute);
    app.use(noRoute);
    app.use(errorMiddleware)
    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`);
    })
}

module.exports = Server;
