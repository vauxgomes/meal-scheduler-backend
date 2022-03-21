const { schedules } = require('../mock/data')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        return res.send(schedules)
    },

    // Create
    async create(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Agendamento Cadastrado'
        })
    },

    // Update
    async update(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Agendamento Atualizado'
        })
    },

    // DELETE
    async delete(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Agendamento Removido'
        })
    }
}
