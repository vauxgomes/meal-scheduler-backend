const accesses = {
    ROOT: 'root',
    ADMIN: 'admin',
    USER: 'user',
    VIEWER: 'viewer'
}

const roles = (permissions) => {
    return (req, res, next) => {
        if (!permissions.includes(req.user.access_value)) {
            return res.status(401).json({
                success: false,
                message: 'user.permission.denied'
            })
        }

        next()
    }
}

module.exports = { accesses, roles }
