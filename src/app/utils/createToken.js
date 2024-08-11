const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET
const jwt_expires_in = process.env.JWT_EXPIRES_IN

exports.createToken = (data) => {
    return jwt.sign(data, jwt_secret, { expiresIn: jwt_expires_in })
}