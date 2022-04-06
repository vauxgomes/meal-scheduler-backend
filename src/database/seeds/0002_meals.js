exports.seed = async function (knex) {
    await knex('meals').del()
    await knex('meals').insert([
        {
            title: 'Cuscuz com calabresa',
            description: 'Cuscuz com calabresa e laranja'
        },
        {
            title: 'Suco goiaba e biscoito doce',
            description: 'Suco de goiaba, biscoito doce e melão'
        }
    ])
}
