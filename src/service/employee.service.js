const EmployeeService = (employeeRepository) => {
    const {  create, list, getById, update, remove } = employeeRepository;
    const registerEmployee = (newEmployee) => create(newEmployee);
    const findAllEmployee = () => list();
    const findEmployeeById = (id) => getById(id)
    const updateEmployee = (newEmployee) => update(newEmployee);
    const removeEmployee = (id) => remove(id);
    return {
        registerEmployee, findAllEmployee, findEmployeeById, updateEmployee, removeEmployee
    }
}

module.exports = EmployeeService;
