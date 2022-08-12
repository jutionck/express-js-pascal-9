const {s, m} = require("time-convert");
const jwt = require("jsonwebtoken");

const JwtUtil = () => {
    const sign = (payload) => {
        const {TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM} = process.env;
        const algorithm = TOKEN_ALGORITHM;
        const key = TOKEN_SECRET;
        const expiresIn = s.from(m)(TOKEN_EXPIRATION);
        return jwt.sign({ ...payload }, key, {expiresIn, algorithm},
            null
        );;
    }

    const verify = (token) => {
        return jwt.verify(token, process.env.TOKEN_SECRET, '', null);
    }

    return { sign, verify }
}
module.exports = JwtUtil;
