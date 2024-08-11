const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET
const jwt_expires_in = process.env.JWT_EXPIRES_IN


exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1]

        if (!token) {
            return res.status(401).json({
                status: 'failed',
                error: 'Token not found'
            })
        }
        const decoded = jwt.verify(token, jwt_secret);

        if (!decoded?.email) {
            return res.status(401).json({
                status: 'failed',
                error: 'Invalid Token'
            })
        }

        req.user = { email: decoded?.email }
        next()
    } catch (error) {
        return res.status(400).json({ status: 'Failed', error: error })
    }
}