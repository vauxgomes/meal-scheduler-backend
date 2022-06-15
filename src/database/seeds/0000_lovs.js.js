const { accesses } = require('../../middleware/roles')

exports.seed = async function (knex) {
    console.log('SEEDS: LOVS')

    if (await knex.select('id').from('lovs').first()) {
        console.log(' - ABORTED: Table has already being populated')
        return
    }

    await knex('lovs').insert([
        { class: 'access', value: accesses.ROOT, nice: 'Root', order: 0 },
        {
            class: 'access',
            value: accesses.ADMIN,
            nice: 'Administrador',
            order: 1
        },
        { class: 'access', value: accesses.USER, nice: 'Usuário', order: 2 },
        {
            class: 'access',
            value: accesses.VIEWER,
            nice: 'Visualização',
            order: 3
        },
        { class: 'course', value: 'redes', nice: 'Graduação Redes', order: 0 },
        { class: 'course', value: 'bio', nice: 'Graduação Biologia', order: 1 },
        {
            class: 'course',
            value: 'infonet',
            nice: 'Integrado Internet',
            order: 2
        },
        {
            class: 'course',
            value: 'eletro',
            nice: 'Integrado Eletromecânica',
            order: 3
        },
        {
            class: 'course',
            value: 'auto',
            nice: 'Integrado Automação',
            order: 4
        },
        { class: 'time', value: 'morning', nice: 'Lanche da Manhã', order: 0 },
        { class: 'time', value: 'noon', nice: 'Almoço', order: 1 },
        { class: 'time', value: 'afternoon', nice: 'Lanche da Tarde', order: 2 },
        { class: 'time', value: 'evening', nice: 'Lanche da Noite', order: 3 }
    ])
}
