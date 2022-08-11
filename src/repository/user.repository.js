const DbQuery = require('../config/db.query');
const UserDto = require('../model/dto/user.dto');
const { passwordUtil, passwordCompare} = require('../utils/password.util');
const UserRepository = (db) => {
    const create = async (payload) => {
        try {
            const password = await passwordUtil(payload.password);
            const result = await db.query(
                DbQuery().INSERT_USER, [
                    payload.username,
                    payload.email,
                    password
                ]);
            return UserDto(result);
        } catch (err) {
            return err.message
        }
    }

    const list = async (username) => {
        try {
            if (username) {
                const result = await db.query(DbQuery().SELECT_USER_USERNAME, [username]);
                if (result.rowCount > 0) {
                    return UserDto(result);
                }
                return `User with value username ${username} not found!`;
            }
            const users = [];
            const result = await db.query(DbQuery().SELECT_USER_LIST);
            for (let i = 0; i < result.rows.length; i++) {
                users.push(UserDto(result, i));
            }
            return users;
        } catch (err) {
            return err.message
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(DbQuery().SELECT_USER_ID, [id]);
            return UserDto(result);
        } catch (err) {
            return err.message
        }
    };

    const getUserByUsernamePassword = async (username, password) => {
        try {
            const result = await db.query(DbQuery().SELECT_USER, [username]);
            console.log('UserRepository.getUserByUsernamePassword.result:', result)
            if (result.rowCount === 0) {
                return null;
            }
            const validPassword = await passwordCompare(password, result.rows[0].password);
            console.log('UserRepository.getUserByUsernamePassword.validPassword:', validPassword)
            if (!validPassword) {
                return null;
            }
            return await getById(result.rows[0].id)
        } catch (err) {
            return err.message
        }
    }

    return {
        create, list, getById, getUserByUsernamePassword
    }
}
module.exports = UserRepository
