exports.seed = async function (knex) {
    await knex('users').del()
    await knex('users').insert([
        { name: 'Vaux', username: 'root', password: '123', role: 100 },
        { name: 'Sandino', username: 'admin', password: '123', role: 300 }
    ])
}
