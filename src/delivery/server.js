const express = require('express');
const EmployeeRoute = require('./routes/employee.route');
const config = require('../config/config');
require('dotenv').config();
const { port, host } = config();
const Server = () => {
    const app = express();
    app.use(express.json());

    const run = () => {
        // Semua route di taro disini...
        EmployeeRoute(app);
    }
    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`);
    })
    return { run }
}

module.exports = Server;
