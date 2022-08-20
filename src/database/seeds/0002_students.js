const dotenv = require('dotenv')
dotenv.config()

exports.seed = async function (knex) {
    console.log('SEEDS: STUDENTS')

    if (await knex.select('*').from('students').first()) {
        console.log(' - ABORTED: Table has already being populated')
        return
    }

    const user = await knex
        .select('id')
        .from('users')
        .where('username', 'student')
        .first()

    const course = await knex
        .select('id')
        .from('lovs')
        .where('class', 'course')
        .first()

    // await knex('meals').del()
    await knex('students').insert([
        {
            user_id: user.id,
            course: course.id,
            enrollment_code: '0000000000000',
            food_restriction: false
        }
    ])
}
