const Response = require ("../../utils/reponse");
const UserController = () => {
    const createUser = async (req, res) => {
        try {
            const payload = req.body;
            const newUser = await req.service.registerNewUser(payload);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newUser));
        } catch (err) {
            res.status(400).json(Response().errorMessage('XX', err.message));
        }
    }

    const getAllUser = async (req, res) => {
        try {
            const keyword = req.query.username;
            const employee = await req.service.findAllUser(keyword);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
        } catch (err) {
            console.log(err.message)
            res.status(400).json(Response().errorMessage(res.statusCode, err.message));
        }
    }

    const getUserById = async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await req.service.findUserById(id);
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', employee));
        } catch (err) {
            res.status(400).json(Response().errorMessage(res.statusCode, err.message));
        }
    }

    return {
        createUser, getAllUser, getUserById
    }
}
module.exports = UserController
