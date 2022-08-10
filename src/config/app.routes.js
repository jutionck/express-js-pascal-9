const Routes = () => {
    const POST_EMPLOYEE = '/employee';
    const GET_EMPLOYEE_LIST = '/employee';
    const GET_EMPLOYEE = '/employee/:id';
    const PUT_EMPLOYEE = '/employee';
    const DELETE_EMPLOYEE = '/employee/:id';

    return {
        POST_EMPLOYEE, GET_EMPLOYEE_LIST, GET_EMPLOYEE, PUT_EMPLOYEE, DELETE_EMPLOYEE
    }
}

module.exports = Routes;
