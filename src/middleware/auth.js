const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.json({
            success: false,
            message: 'user.authentication.required'
        })
    }

    try {
        // Cutting 'Bearer ' string from authentication token
        const token = authorization.slice(7, authorization.length)
        req.user = jwt.verify(token, process.env.TK_KEY)
    } catch (err) {
        return res.status(401).send({
            success: false,
            message: 'user.authentication.fail'
        })
    }

    next()
}
