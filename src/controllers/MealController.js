// DB
const knex = require('../database')
const lib = require('../lib')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        let { visible = null } = req.query

        if (visible === null) {
            visible = [1, 0]
        } else {
            visible = [JSON.parse(visible) ? 1 : 0]
        }

        const meals = await knex
            .select(
                'id',
                'title',
                'description',
                'visible',
                'energy',
                'carbohydrates',
                'proteins',
                'lipids',
                'created_at'
            )
            .from('meals')
            .whereIn('visible', visible)

        // await lib.delay(4000)
        return res.json(meals)
    },

    // Show
    async show(req, res) {
        const { id } = req.params
        const meals = await knex.select().from('meals').where('id', id).first()

        return res.json(meals)
    },

    // Create
    async create(req, res) {
        const { title, description, energy, carbohydrates, proteins, lipids } =
            req.body

        try {
            const [id] = await knex('meals').insert({
                title,
                description,
                energy,
                carbohydrates,
                proteins,
                lipids
            })

            return res.json({ id })
        } catch (err) {
            return res.status(404).json({
                success: false,
                message: 'meal.create.nok'
            })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const {
            title,
            description,
            energy,
            carbohydrates,
            proteins,
            lipids,
            visible
        } = req.body

        try {
            await knex('meals')
                .update({
                    title,
                    description,
                    energy,
                    carbohydrates,
                    proteins,
                    lipids,
                    visible
                })
                .where({ id })

            return res.status(200).send({
                success: true,
                msg: 'meal.update.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'meal.update.nok'
            })
        }
    },

    // DELETE
    async delete(req, res) {
        const { id } = req.params

        try {
            await knex('meals').where({ id }).del()

            return res.status(200).send({
                success: true,
                msg: 'meal.delete.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'meal.delete.nok'
            })
        }
    }
}
