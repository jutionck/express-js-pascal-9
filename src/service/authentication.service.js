const dotenv = require('dotenv');
const JwtUtil = require('../utils/jwt-util');
const AuthenticationService = (userService) => {
    dotenv.config();
    const { findUserByUsernamePassword } = userService;

    const login = async (payload) => {
        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        if (!user) return `Invalid account!`;
        return JwtUtil().sign(user);;
    }

    const logout = () => {}
    const forgotPassword = () => {}
    return {
        login, logout, forgotPassword
    }
}
module.exports = AuthenticationService;
