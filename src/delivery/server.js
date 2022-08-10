const express = require('express');
const config = require('../config/config');
const errorRoute = require('./routes/error.route');
const jsonMiddleware = require('./middleware/json.middleware');
const appRoute = require('./routes/index');
require('dotenv').config();
const { port, host } = config();
const Server = () => {
    const app = express();
    app.use(jsonMiddleware);
    app.use(appRoute);
    app.use(errorRoute);
    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`);
    })
}

module.exports = Server;
