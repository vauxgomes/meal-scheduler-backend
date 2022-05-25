const knex = require('../database')

module.exports = {
    // Index
    async index(req, res) {
        const start = new Date()
        start.setMinutes(start.getMinutes() - start.getTimezoneOffset())

        const ending = new Date(start)
        ending.setDate(ending.getDate() + 6)

        const schedules = await knex
            .select(
                'schedules.id',
                'schedules.meal_id',
                'schedules.date',
                'meals.description',
                'orders.id as order_id',
                'orders.like',
                'lovs.id as time'
            )
            .from('schedules')
            .leftJoin('orders', 'schedules.id', 'orders.schedule_id')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('schedules.date', '>=', start.toISOString().slice(0, 10))
            .andWhere('schedules.date', '<', ending.toISOString().slice(0, 10))

        return res.json(schedules)
    }
}
