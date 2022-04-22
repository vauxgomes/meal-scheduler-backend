const knex = require('../database')
const uuid = require('uuid')

module.exports = {
    // Index
    async index(req, res) {
        const orders = await knex
            .select(
                'orders.id as id',
                'user_id',
                'users.name',
                'schedules.date',
                'lovs.value as time',
                'like'
            )
            .from('orders')
            .innerJoin('users', 'orders.user_id', 'users.id')
            .innerJoin('schedules', 'orders.schedule_id', 'schedules.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')

        return res.json(orders)
    },

    // Show
    async show(req, res) {
        const { id } = req.params

        const orders = await knex
            .select(
                'orders.id as id',
                'user_id',
                'users.name',
                'schedules.date',
                'lovs.value as time',
                'like'
            )
            .from('orders')
            .innerJoin('users', 'orders.user_id', 'users.id')
            .innerJoin('schedules', 'orders.schedule_id', 'schedules.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('orders.id', id)
            .first()

        return res.json(orders)
    },

    // Create
    async create(req, res) {
        const { user_id, schedule_id } = req.body

        try {
            const id = uuid.v4()
            await knex('orders').insert({
                id,
                user_id,
                schedule_id
            })

            return res.json({ id })
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
            console.log(err)

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
