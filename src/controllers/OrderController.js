// Controller
module.exports = {
    // Index
    async index(req, res) {
        return res.send([])
    },

    // Create
    async create(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Estudante Cadastrado'
        })
    },

    // Update
    async update(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Estudante Atualizado'
        })
    },

    // DELETE
    async delete(req, res) {
        return res.status(200).send({
            success: true,
            msg: 'Estudante Removido'
        })
    }
}
