const knex = require('../database')

module.exports = {
    // Index
    async index(req, res) {
        const start = new Date()
        start.setMinutes(start.getMinutes() - start.getTimezoneOffset())

        const ending = new Date(start)
        ending.setDate(ending.getDate() + 6)

        const schedules = await knex
            .select('schedules.*', 'orders.id as order_id', 'orders.like')
            .from('schedules')
            .leftJoin('orders', 'schedules.id', 'orders.schedule_id')
            .where('schedules.date', '>=', start.toISOString().slice(0, 10))
            .andWhere('schedules.date', '<', ending.toISOString().slice(0, 10))

        return res.json(schedules)
    }
}
