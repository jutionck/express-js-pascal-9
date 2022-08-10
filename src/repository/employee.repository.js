const DbQuery = require('../config/db.query');
const EmployeeDto = require('../model/dto/employee.dto');
const EmployeeRepository = (db) => {
    const create = async (payload) => {
        try {
            const result = await db.query(
                DbQuery().INSERT_BIODATA,
                [
                    payload.firstName,
                    payload.lastName,
                    payload.dob,
                    payload.pob,
                    payload.add,
                    payload.maritalStatus
                ]);
            return EmployeeDto(result);
        } catch (err) {
           return err.message
        }
    }

    const list = async (keyword) => {
        try {
            const employees = [];
            if (keyword) {
                const result = await db.query(DbQuery().SELECT_BIODATA_SEARCH, [`%${keyword}%`]);
                for (let i = 0; i < result.rows.length; i++) {
                    employees.push(EmployeeDto(result, i));
                }
                return employees;
            }
            const result = await db.query(DbQuery().SELECT_BIODATA_LIST);
            for (let i = 0; i < result.rows.length; i++) {
                employees.push(EmployeeDto(result, i));
            }
            return employees;
        } catch (err) {
            return err.message
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_BIODATA_ID, [id]);
            if (result.rowCount > 0) return EmployeeDto(result);
        } catch (err) {
            return err.message
        }
    }

    const update = async (payload) => {
        try {
            const idx = await getById(payload.id);
            if (!idx) return `Employee with value ID ${payload.id} not found!`;
            const result = await db.query(
                DbQuery().UPDATE_BIODATA,  [
                    payload.firstName,
                    payload.lastName,
                    payload.dob,
                    payload.pob,
                    payload.add,
                    payload.maritalStatus,
                    payload.id
                ]);
            return EmployeeDto(result);
        } catch (err) {
            return err.message
        }
    }

    const remove = async (id) => {
        try {
            const idx = await getById(id);
            if (!idx) return `Employee with value ID ${id} not found!`;
            await db.query(DbQuery().DELETE_BIODATA, [id]);
            return `Employee with value ID ${id} success deleted!`;
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list, getById, update, remove
    }
}

module.exports = EmployeeRepository;
