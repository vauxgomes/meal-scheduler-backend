const dotenv = require('dotenv')
dotenv.config()

const { hashSync } = require('bcrypt')
const ENC_SALT = Number(process.env.ENC_SALT)

exports.seed = async function (knex) {
    console.log('SEEDS: MEALS')

    if (await knex.select('id').from('meals').first()) {
        console.log(' - ABORTED: Table has already being populated')
        return
    }

    // await knex('meals').del()
    await knex('meals').insert([
        {
            title: 'Meal 0001',
            description: 'Refeição Exemplo 0001',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        },
        {
            title: 'Meal 0002',
            description: 'Refeição Exemplo 0002',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        },
        {
            title: 'Meal 0003',
            description: 'Refeição Exemplo 0003',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        }
    ])
}
