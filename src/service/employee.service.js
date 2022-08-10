const EmployeeService = (employeeRepository) => {
    const {  create, list, getById, update, remove } = employeeRepository;
    const registerEmployee = async (newEmployee) => {
        try {
            return await create(newEmployee);
        } catch (err) {
            return err.message
        }
    }
    const findAllEmployee = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message
        }
    }
    const findEmployeeById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }
    const updateEmployee = async (newEmployee) => {
        try {
            return await update(newEmployee);
        } catch (err) {
            return err.message
        }
    }
    const removeEmployee = async (id) => {
        try {
            return await remove(id);
        } catch (err) {
            return err.message
        }
    }
    return {
        registerEmployee, findAllEmployee, findEmployeeById, updateEmployee, removeEmployee
    }
}

module.exports = EmployeeService;
