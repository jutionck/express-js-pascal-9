const AuthenticationService = (userService) => {
    const { findUserByUsernamePassword } = userService;
    const login = async (payload) => {
        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        console.log('AuthenticationService.user:', user)
        if (!user) return `Invalid account!`;
        // TOKEN
        return `enigma`;
    }

    const logout = () => {}
    const forgotPassword = () => {}
    return {
        login, logout, forgotPassword
    }
}
module.exports = AuthenticationService;
