// DB
const knex = require('../database')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        const users = await knex.select('name', 'username').from('users')
        return res.json(users)
    },

    // Create
    async create(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Usuário Cadastrado'
        })
    },

    // Update
    async update(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Usuário Atualizado'
        })
    },

    // DELETE
    async delete(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Usuário Removido'
        })
    }
}
