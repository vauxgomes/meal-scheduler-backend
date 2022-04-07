// DB
const knex = require('../database')

// Controller
module.exports = {
    // Index
    async index(req, res) {
        const students = await knex
            .select(
                'user_id as id',
                'users.name',
                'lovs.nice as course',
                'food_restriction'
            )
            .from('students')
            .innerJoin('users', 'students.user_id', 'users.id')
            .innerJoin('lovs', 'students.course', 'lovs.id')

        return res.json(students)
    },

    // Show
    async show(req, res) {
        const { id } = req.params

        const students = await knex
            .select(
                'user_id as id',
                'users.name',
                'lovs.nice as course',
                'food_restriction'
            )
            .from('students')
            .innerJoin('users', 'students.user_id', 'users.id')
            .innerJoin('lovs', 'students.course', 'lovs.id')
            .where('users.id', id)
            .first()

        return res.json(students)
    },

    // Create
    async create(req, res) {
        const { user_id, course, food_restriction } = req.body

        try {
            const [id] = await knex('students').insert({
                user_id,
                course,
                food_restriction
            })

            return res.json({ id })
        } catch (err) {
            if (err)
                return res.status(400).json({
                    success: false,
                    message: 'student.not.unique'
                })
            else
                return res.status(404).json({
                    success: false,
                    message: 'student.create.nok'
                })
        }
    },

    // Update
    async update(req, res) {
        const { id } = req.params
        const { course, food_restriction } = req.body

        try {
            await knex('students')
                .update({
                    course,
                    food_restriction
                })
                .where({ user_id: id })

            return res.status(200).send({
                success: true,
                msg: 'student.update.ok'
            })
        } catch (err) {
            console.log(err)

            return res.status(404).send({
                success: false,
                msg: 'student.update.nok'
            })
        }
    },

    // DELETE
    async delete(req, res) {
        const { id } = req.params

        try {
            await knex('students').where({ user_id: id }).del()

            return res.status(200).send({
                success: true,
                msg: 'student.delete.ok'
            })
        } catch (err) {
            return res.status(404).send({
                success: false,
                msg: 'student.delete.nok'
            })
        }
    }
}
