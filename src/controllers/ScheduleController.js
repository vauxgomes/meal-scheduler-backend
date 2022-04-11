// DB
const knex = require('../database')

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Controller
module.exports = {
    // Index
    async index(req, res) {
        let {
            m: month = new Date().getMonth(),
            y: year = new Date().getFullYear()
        } = req.query

        month = Number.parseInt(month)
        year = Number.parseInt(year)

        const _year = month === 12 ? year + 1 : year
        const _month = (month % 12) + 1

        // console.log(`FROM: ${year}-${month.toString().padStart(2, '0')}-01 00:00:00`)
        // console.log(`TO:   ${_year}-${_month.toString().padStart(2, '0')}-01 00:00:00`)

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
                `${year}-${month.toString().padStart(2, '0')}-01 00:00:00`
            )
            .where(
                'date',
                '<',
                `${_year}-${_month.toString().padStart(2, '0')}-01 00:00:00`
            )
            .orderBy('date', 'asc')

        // console.log(`SIZE: ${schedules.length}\n`)

        // await delay(3000)
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

    // Create
    async create(req, res) {
        const { meal_id, date, time } = req.body

        try {
            const [id] = await knex('schedules').insert({
                meal_id,
                date,
                time
            })

            return res.json({ id })
        } catch (err) {
            console.log(err)

            if (err)
                return res.status(400).json({
                    success: false,
                    message: 'schedule.not.unique'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'schedule.create.nok'
                })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const { meal_id, date, time } = req.body

        try {
            await knex('schedules')
                .update({
                    meal_id,
                    date,
                    time
                })
                .where({ id })

            return res.status(200).send({
                success: true,
                msg: 'schedule.update.ok'
            })
        } catch (err) {
            console.log(err)

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
            await knex('schedules').where({ user_id: id }).del()

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
