const dotenv = require('dotenv')
dotenv.config()

const { hashSync } = require('bcrypt')
const ENC_SALT = Number(process.env.ENC_SALT)

exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    if (await knex.select('id').from('users').first()) {
        console.log(' - ABORTED: Table has already being populated')
        return
    }

    const accesses = await knex
        .select('id')
        .from('lovs')
        .where('class', 'access')
        .orderBy('order')

    // await knex('users').del()
    await knex('users').insert([
        {
            name: 'Root',
            username: 'root',
            password: hashSync('root', ENC_SALT),
            access: accesses[0].id
        },
        {
            name: 'Admin',
            username: 'admin',
            password: hashSync('admin', ENC_SALT),
            access: accesses[1].id
        },
        {
            name: 'Student',
            username: 'student',
            password: hashSync('student', ENC_SALT),
            access: accesses[2].id
        }
    ])
}
