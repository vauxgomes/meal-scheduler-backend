const knex = require('../database')

module.exports = {
    // Index
    async index(req, res) {
        let { v = null } = req.query
        v = v == null ? [0, 1] : [v === 'false' || v === 0 ? 0 : 1]

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
            .whereIn('visible', v)
            .orderBy('title', 'asc')
            .orderBy('description', 'asc')
            .orderBy('created_at', 'asc')

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
            await knex('meals').insert({
                title,
                description,
                energy: energy ? energy : 0,
                carbohydrates: carbohydrates ? carbohydrates : 0,
                proteins: proteins ? proteins : 0,
                lipids: lipids ? lipids : 0
            })

            const meal = await knex
                .select('id')
                .from('meals')
                .orderBy('created_at', 'desc')
                .limit(1)
                .first()

            return res.json({
                success: true,
                message: 'meal.create.ok',
                meal
            })
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
