const knex = require('../database')
const jwt = require('jsonwebtoken')

const { compareSync } = require('bcrypt')
const { TK_KEY, TK_EXP } = process.env

// Controller
module.exports = {
    async register(req, res) {
        try {
            const { username, password } = req.body
            const user = await knex
                .select(
                    'users.id as id',
                    'lovs.value as access_value',
                    'lovs.order as access_level',
                    'password'
                )
                .from('users')
                .innerJoin('lovs', 'users.access', 'lovs.id')
                .where('username', username)
                .first()

            if (compareSync(password, user.password)) {
                // Generating token
                const token = jwt.sign(
                    {
                        id: user.id,
                        access_value: user.access_value,
                        access_level: user.access_level
                    },
                    TK_KEY,
                    {
                        expiresIn: TK_EXP
                    }
                )

                return res.json({
                    success: true,
                    token,
                    message: 'user.registration.ok'
                })
            } else {
                return res.json({
                    success: false,
                    message: 'user.registration.nok'
                })
            }
        } catch (err) {
            return res.status(400).json({
                success: false,
                message: 'user.registration.error'
            })
        }
    }
}
