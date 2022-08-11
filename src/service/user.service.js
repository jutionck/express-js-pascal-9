const UserService = (userRepository) => {
    const { create, list, getById, getUserByUsernamePassword } = userRepository;
    const registerNewUser = async (newUser) => {
        try {
            return await create(newUser);
        } catch (err) {
            return err.message
        }
    }

    const findAllUser = async (keyword) => {
        try {
            return await list(keyword);
        } catch (err) {
            return err.message
        }
    }

    const findUserById = async (id) => {
        try {
            return await getById(id);
        } catch (err) {
            return err.message
        }
    }

    const findUserByUsernamePassword = async (username, password) => {
        try {
            return await getUserByUsernamePassword(username, password);
        } catch (err) {
            return err.message
        }
    }

    return {
        registerNewUser, findUserByUsernamePassword, findAllUser, findUserById
    }
}
module.exports = UserService;
