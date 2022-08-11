const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const UserRoute = (userController) => {
    const { createUser, getAllUser, getUserById } = userController();
    router.post('/', authMiddleware, createUser);
    router.get('/', authMiddleware, getAllUser);
    router.get('/:id', authMiddleware, getUserById);
    return router;
}
module.exports = UserRoute;
