const knex = require('../database')

module.exports = {
    // Index
    async index(req, res) {
        const { id: user_id } = req.user
        const orders = await knex
            .select(
                'orders.id as id',
                'meals.title',
                'meals.description',
                'schedules.date',
                'lovs.order as time',
                'like'
            )
            .from('orders')
            .innerJoin('schedules', 'orders.schedule_id', 'schedules.id')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('orders.user_id', user_id)
            .orderBy('orders.created_at', 'asc')
            .limit(30)

        return res.json(orders)
    },

    // Show
    async show(req, res) {
        const { id } = req.params
        const { id: user_id } = req.user

        const orders = await knex
            .select(
                'orders.id as id',
                'meals.title',
                'meals.description',
                'schedules.date',
                'lovs.order as time',
                'like'
            )
            .from('orders')
            .innerJoin('schedules', 'orders.schedule_id', 'schedules.id')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('orders.id', id)
            .andWhere({ user_id })
            .first()

        return res.json(orders)
    },

    // Create
    async create(req, res) {
        const { id: user_id } = req.user
        const { schedule_id } = req.body

        try {
            await knex('orders').insert({
                user_id,
                schedule_id
            })

            const order = await knex
                .select('id')
                .from('orders')
                .orderBy('created_at', 'desc')
                .limit(1)
                .first()

            return res.json({
                success: true,
                message: 'order.create.ok',
                order
            })
        } catch (err) {
            if (err)
                return res.status(400).json({
                    success: false,
                    message: 'order.not.unique'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'order.create.nok'
                })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const { like } = req.body

        try {
            await knex('orders').update({ like }).where({ id })

            return res.status(200).send({
                success: true,
                msg: 'order.update.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'order.update.nok'
            })
        }
    },

    // DELETE
    async delete(req, res) {
        const { id } = req.params

        try {
            await knex('orders').where({ id }).del()

            return res.status(200).send({
                success: true,
                msg: 'order.delete.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'order.delete.nok'
            })
        }
    }
}
