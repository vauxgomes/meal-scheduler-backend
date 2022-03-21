const { meals } = require('../mock/data')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        return res.send(meals)
    },

    // Create
    async create(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Refeição Cadastrado'
        })
    },

    // Update
    async update(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Refeição Atualizado'
        })
    },

    // DELETE
    async delete(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Refeição Removido'
        })
    }
}
