const dotenv = require('dotenv')
dotenv.config()

exports.seed = async function (knex) {
    console.log('SEEDS: MEALS')

    if (await knex.select('id').from('meals').first()) {
        console.log(' - ABORTED: Table has already being populated')
        return
    }

    // await knex('meals').del()
    await knex('meals').insert([
        {
            title: 'Refeição 01',
            description: 'Refeição Exemplo 01',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        },
        {
            title: 'Refeição 02',
            description: 'Refeição Exemplo 02',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        },
        {
            title: 'Refeição 03',
            description: 'Refeição Exemplo 03',
            visible: true,
            energy: 100,
            carbohydrates: 100,
            proteins: 100,
            lipids: 100
        }
    ])
}
