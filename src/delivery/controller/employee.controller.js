const EmployeeService = require('../../service/employee.service');
const EmployeeRepository = require('../../repository/employee.repository');
const Response = require('../../utils/reponse');

const EmployeeController = () => {
    const employeeService = EmployeeService(EmployeeRepository())
    const createEmployee = (req, res) => {
        const payload = req.body;
        const newEmployee = employeeService.registerEmployee(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
    }

    const listEmployee = (req, res) => {
        const employees = employeeService.findAllEmployee();
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
    }

    const getEmployee = (req, res) => {
        const id = req.params.id
        const employee = employeeService.findEmployeeById(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    const updateEmployee = (req, res) => {
        const payload = req.body;
        const newEmployee = employeeService.updateEmployee(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
    }

    const deleteEmployee = (req, res) => {
        const id = req.params.id
        const employee = employeeService.removeEmployee(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    return {
        createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployee
    }
}

module.exports = EmployeeController;
