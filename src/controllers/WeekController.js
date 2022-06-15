const knex = require('../database')

module.exports = {
    // Index
    async index(req, res) {
        const { id: user_id } = req.user

        const start = new Date()
        start.setMinutes(start.getMinutes() - start.getTimezoneOffset())

        const ending = new Date(start)
        ending.setDate(ending.getDate() + 20)

        const schedules = await knex
            .select(
                'schedules.id',
                'schedules.meal_id',
                'schedules.date',
                'meals.description',
                'lovs.id as time',
                'lovs.nice as time_nice'
            )
            .from('schedules')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('schedules.date', '>=', start.toISOString().slice(0, 10))
            .andWhere('schedules.date', '<', ending.toISOString().slice(0, 10))
            .orderBy('schedules.date', 'asc')
            .orderBy('lovs.id', 'asc')

        return res.json(schedules)
    }
}
