const express = require('express');
const router = express.Router();
const EmployeeRoute = (employeeController) => {
    const {createEmployee, listEmployee, getEmployee, updateEmployee, deleteEmployee} = employeeController();
    router.post('/', createEmployee);
    router.get('/', listEmployee);
    router.get('/:id', getEmployee);
    router.put('/', updateEmployee);
    router.delete('/:id', deleteEmployee);
    return router;
}
module.exports = EmployeeRoute;
