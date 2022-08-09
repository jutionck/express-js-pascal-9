const EmployeeService = (employeeRepository) => {
    const {  create, list, getById } = employeeRepository;
    const registerEmployee = (newEmployee) => create(newEmployee);
    const findAllEmployee = () => list();
    const findEmployeeById = (id) => getById(id)
    return {
        registerEmployee, findAllEmployee, findEmployeeById
    }
}

module.exports = EmployeeService;
