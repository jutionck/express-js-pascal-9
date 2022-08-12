const JwtUtil = require("../../utils/jwt-util");
const AuthMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }
        JwtUtil().verify(token);
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}
module.exports = AuthMiddleware;
