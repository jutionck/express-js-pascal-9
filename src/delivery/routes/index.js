const express = require('express');
const employeeRouter = require('./employee.route');
const EmployeeService = require('../../service/employee.service');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeController = require('../controller/employee.controller')
const db = require("../../config/db");
const router = express.Router();
const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}
router.use('/employee', employeeService, employeeRouter(EmployeeController));

module.exports = router;

