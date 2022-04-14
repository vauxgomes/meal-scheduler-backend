// DB
const knex = require('../database')

// Encrypt
const { compareSync } = require('bcrypt')

// Controller
module.exports = {
    // Authenticate
    async authenticate(req, res) {
        try {
            const { username, password } = req.body
            const { password: hash } = await knex
                .select('password')
                .from('users')
                .where('username', username)
                .first()

            if (compareSync(password, hash))
                return res.json({
                    success: true,
                    message: 'user.authentication.ok'
                })
            else
                return res.json({
                    success: false,
                    message: 'user.authentication.nok'
                })
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: 'user.authentication.error'
            })
        }
    }
}
