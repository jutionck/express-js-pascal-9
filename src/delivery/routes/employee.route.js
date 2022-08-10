const Routes = require('../../config/app.routes');
const EmployeeController = require('../controller/employee.controller');
const EmployeeRoute = (app) => {
    app.post(Routes().POST_EMPLOYEE, EmployeeController().createEmployee);
    app.get(Routes().GET_EMPLOYEE_LIST, EmployeeController().listEmployee);
    app.get(Routes().GET_EMPLOYEE, EmployeeController().getEmployee);
    app.put(Routes().PUT_EMPLOYEE, EmployeeController().updateEmployee);
    app.delete(Routes().DELETE_EMPLOYEE, EmployeeController().deleteEmployee);
}
module.exports = EmployeeRoute;
