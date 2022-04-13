exports.seed = async function (knex) {
    console.log('SEEDS: LOVS')

    await knex('lovs').del()
    await knex('lovs').insert([
        { class: 'access', value: 'root', nice: 'Root', order: 0 },
        { class: 'access', value: 'admin', nice: 'Administrador', order: 1 },
        { class: 'access', value: 'user', nice: 'Usuário', order: 2 },
        { class: 'access', value: 'viewer', nice: 'Visualização', order: 3 },
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
        { class: 'time', value: 'morning', nice: 'Manhã', order: 0 },
        { class: 'time', value: 'afternoon', nice: 'Tarde', order: 1 },
        { class: 'time', value: 'night', nice: 'Noite', order: 2 }
    ])
}
