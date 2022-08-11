const express = require('express');
const router = express.Router();
const AuthRoute = (authController) => {
    const { loginAccount } = authController();
    router.post('/login', loginAccount);
    return router;
}
module.exports = AuthRoute;
