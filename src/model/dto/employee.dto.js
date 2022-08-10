// EmployeeDto untuk kebutuhan response bidata/employee
const Employee = require('../employee');
module.exports = EmployeeDto = (result, index = 0) => {
    return Employee(
        result.rows[index].id,
        result.rows[index].first_name,
        result.rows[index].last_name,
        result.rows[index].dob,
        result.rows[index].pob,
        result.rows[index].address,
        result.rows[index].marital_status,
    )
}
