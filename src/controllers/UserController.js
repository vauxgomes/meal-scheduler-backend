// DB
const knex = require('../database')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        const users = await knex.select('id', 'name', 'username').from('users')
        return res.json(users)
    },

    // Show
    async show(req, res) {
        const { id } = req.params

        const user = await knex
            .select('id', 'name', 'username')
            .from('users')
            .where('id', id)
            .first()

        return res.json(user)
    },

    // Create
    async create(req, res) {
        try {
            const { name, username, password, access = 3 } = req.body
            const [id] = await knex('users').insert({
                name,
                username,
                password,
                access
            })

            return res.json({ id })
        } catch (err) {
            console.log(err)

            if (err)
                return res.status(400).json({
                    success: false,
                    message: 'user.not.unique'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'user.create.nok'
                })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const { name, username, password, access, active } = req.body

        try {
            await knex('users')
                .update({
                    name,
                    username,
                    password,
                    access,
                    active
                })
                .where({ id })

            return res.status(200).send({
                success: true,
                msg: 'user.update.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'user.update.nok'
            })
        }
    },

    // DELETE
    async delete(req, res) {
        const { id } = req.params

        try {
            await knex('users').where({ id }).del()

            return res.status(200).send({
                success: true,
                msg: 'user.delete.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'user.delete.nok'
            })
        }
    }
}
