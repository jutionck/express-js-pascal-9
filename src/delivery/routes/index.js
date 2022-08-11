const express = require('express');
const employeeRouter = require('./employee.route');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const EmployeeService = require('../../service/employee.service');
const EmployeeRepository = require('../../repository/employee.repository');
const EmployeeController = require('../controller/employee.controller')
const db = require('../../config/db');
const UserService = require('../../service/user.service');
const UserRepository = require('../../repository/user.repository');
const UserController = require('../controller/user.controller');
const AuthenticationController = require('../controller/authentication.controller');
const AuthenticationService = require('../../service/authentication.service');
const router = express.Router();
const employeeService = (req, res, next) => {
    req.service = EmployeeService(EmployeeRepository(db));
    next()
}

const userService = (req, res, next) => {
    req.service = UserService(UserRepository(db));
    next()
}

const authService = (req, res, next) => {
    req.service = AuthenticationService(UserService(UserRepository(db)));
    next()
}

router.use('/employee', employeeService, employeeRouter(EmployeeController));
router.use('/user', userService, userRouter(UserController));
router.use('/auth', authService, authRouter(AuthenticationController));

module.exports = router;

