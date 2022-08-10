const Response = require('../../utils/reponse');

const EmployeeController = () => {
    const createEmployee = async (req, res) => {
        try {
            const payload = req.body;
            const newEmployee = await  req.service.registerEmployee(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const listEmployee = async (req, res) => {
        try {
            const keyword = req.query.q
            const employees = await req.service.findAllEmployee(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employees));
        } catch (err) {
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const getEmployee = async (req, res) => {
        const id = req.params.id
        const employee = await req.service.findEmployeeById(+id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    const updateEmployee = async (req, res) => {
        const payload = req.body;
        const newEmployee = await req.service.updateEmployee(payload);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', newEmployee));
    }

    const deleteEmployee = async (req, res) => {
        const id = req.params.id
        const employee = await req.service.removeEmployee(id);
        res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
    }

    return {
        createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployee
    }
}

module.exports = EmployeeController;
