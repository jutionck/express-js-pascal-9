const AuthMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['token'];
        if (!authHeader) {
            return res.status(401).json({
                "message": "Unauthorized"
            })
        }
        const token = authHeader;
        if (token !== 'enigma') {
            return res.status(401).json({
                "message": "Token incorrect!"
            })
        }
        next();
    } catch (err) {
        res.status(401).json({
            "message": err.message
        })
    }
}
module.exports = AuthMiddleware;
