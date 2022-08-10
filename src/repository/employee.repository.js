const employeeDb = [];
const EmployeeRepository = () => {
    const create = (payload) => {
        employeeDb.push(payload);
        return payload;
    }
    const list = () => employeeDb;

    const getById = (id) => {
        return  employeeDb.find((e) => e.id === id);
    }

    const update = (payload) => {
        const id = isIdExist(payload.id);
        if (id !== -1) {
            let employee = employeeDb[id];
            employee.firstName = payload.firstName;
            employee.lastName = payload.lastName;
            employee.dob = payload.dob;
            employee.pob = payload.pob;
            employee.address = payload.address;
            return employee;
        }
        return `Employee with value ID ${id} not found`;
    }

    const remove = (id) => {
        const idx = isIdExist(id);
        if (idx !== -1) {
            let i = 0;
            for (let employee of employeeDb){
                if (employee.id === id){
                    employeeDb.splice(i, 1);
                }
                i++;
            }
            return id
        }
        return `Employee with value ID ${id} not found`;
    }

    function isIdExist(id) {
        return employeeDb.findIndex((e) => e.id === id);
    }

    return {
        create, list, getById, update, remove
    }
}

module.exports = EmployeeRepository;
