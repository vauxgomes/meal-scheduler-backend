// DB
const knex = require('../database')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Controller
module.exports = {
    // Index
    async index(req, res) {
        let { m: month, y: year } = req.query

        // Month range
        let currentMonth = new Date(year, month, 1)
        if (!(currentMonth instanceof Date) || isNaN(currentMonth)) {
            currentMonth = new Date()
            currentMonth.setDate(1)
            currentMonth.setHours(0, 0, 0, 0)
        }

        let nextMonth = new Date(currentMonth)
        nextMonth.setMonth(nextMonth.getMonth() + 1)

        //
        const schedules = await knex
            .select(
                'schedules.id as id',
                'meal_id',
                'title',
                'description',
                'energy',
                'carbohydrates',
                'proteins',
                'lipids',
                'date',
                'lovs.order as time',
                'lovs.nice as time_nice'
            )
            .from('schedules')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where(
                'schedules.date',
                '>=',
                currentMonth.toISOString().slice(0, 10)
            )
            .andWhere('date', '<', nextMonth.toISOString().slice(0, 10))
            .orderBy('date', 'asc')

        console.log(
            currentMonth.toISOString().slice(0, 10),
            '-->',
            nextMonth.toISOString().slice(0, 10),
            '::',
            schedules.length
        )

        return res.json(schedules)
    },

    // Show
    async show(req, res) {
        const { id } = req.params

        const schedules = await knex
            .select(
                'schedules.id as id',
                'meal_id',
                'title',
                'description',
                'energy',
                'carbohydrates',
                'proteins',
                'lipids',
                'date',
                'lovs.order as time',
                'lovs.nice as time_nice'
            )
            .from('schedules')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('schedules.id', id)
            .first()

        return res.json(schedules)
    },

    // TODAY
    async today(req, res) {
        const { time } = req.params
        const today = new Date()

        const schedule = await knex
            .select(
                'schedules.id as id',
                'title',
                'description',
                'date',
                'lovs.order as time'
            )
            .from('schedules')
            .innerJoin('meals', 'schedules.meal_id', 'meals.id')
            .innerJoin('lovs', 'schedules.time', 'lovs.id')
            .where('date', '=', today.toISOString().slice(0, 10))
            .andWhere('class', 'time')
            .andWhere('order', time)
            .first()

        return res.json(schedule)
    },

    // Create
    async create(req, res) {
        const { meal_id, date, time } = req.body

        try {
            const lov = await knex
                .select('id')
                .from('lovs')
                .where('class', 'time')
                .andWhere('order', time)
                .first()

            if (lov) {
                const [id] = await knex('schedules').insert({
                    meal_id,
                    date,
                    time: lov.id
                })

                return res.json({ id })
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'schedule.create.nok'
                })
            }
        } catch (err) {
            if (err)
                return res.status(400).json({
                    success: false,
                    message: 'schedule.not.unique'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'schedule.create.err'
                })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const { meal_id } = req.body

        try {
            await knex('schedules').update({ meal_id }).where({ id })

            return res.status(200).send({
                success: true,
                msg: 'schedule.update.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'schedule.update.nok'
            })
        }
    },

    // DELETE
    async delete(req, res) {
        const { id } = req.params

        try {
            await knex('schedules').where({ id }).del()

            return res.status(200).send({
                success: true,
                msg: 'schedule.delete.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'schedule.delete.nok'
            })
        }
    }
}
