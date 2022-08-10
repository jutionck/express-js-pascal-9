const EmployeeService = require('../../service/employee.service');
const EmployeeRepository = require('../../repository/employee.repository');
const Response = require('../../utils/reponse');
const db = require('../../config/db');

const EmployeeController = () => {
    const employeeService = EmployeeService(EmployeeRepository(db))
    const createEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await employeeService.registerEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listEmployee = async (req, res) => {
        try {
            const keyword = req.query.q
            const employees = await employeeService.findAllEmployee(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getEmployee = async (req, res) => {
        const id = req.params.id
        const employee = await employeeService.findEmployeeById(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    const updateEmployee = async (req, res) => {
        const payload = req.body;
        const newEmployee = await employeeService.updateEmployee(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
    }

    const deleteEmployee = async (req, res) => {
        const id = req.params.id
        const employee = await employeeService.removeEmployee(id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    return {
        createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployee
    }
}

module.exports = EmployeeController;
