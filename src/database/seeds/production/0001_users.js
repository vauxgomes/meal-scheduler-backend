const { hashSync } = require('bcrypt')
require('dotenv').config()

const salt = Number(process.env.HASH_SALT)

exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    const accesses = await knex
        .select('id')
        .from('lovs')
        .where('class', 'access')
        .orderBy('order')

    await knex('users').del()
    await knex('users').insert([
        {
            name: 'Root',
            username: 'root',
            password: hashSync('root$enh4', salt),
            access: accesses[0].id
        },
        {
            name: 'Admin',
            username: 'admin',
            password: hashSync('admin$enh4', salt),
            access: accesses[1].id
        }
    ])
}
