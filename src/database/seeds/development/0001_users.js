const { hashSync } = require('bcrypt')
const { salt } = require('../../../config')

exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    await knex('users').del()
    await knex('users').insert([
        {
            name: 'Root',
            username: 'root',
            password: hashSync('root$enh4', salt),
            access: 0
        },
        {
            name: 'Admin',
            username: 'admin',
            password: hashSync('admin$enh4', salt),
            access: 1
        },
        {
            name: 'Student 1',
            username: 'student1',
            password: hashSync('12345', salt),
            access: 2
        },
        {
            name: 'Student 2',
            username: 'student2',
            password: hashSync('12345', salt),
            access: 2
        }
    ])
}
