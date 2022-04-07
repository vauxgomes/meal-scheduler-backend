exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    await knex('users').del()
    await knex('users').insert([
        { name: 'Vaux', username: 'root', password: '123', access: 0 },
        { name: 'Sandino', username: 'admin', password: '123', access: 1 },
        { name: 'Alana', username: 'user', password: '123', access: 2 }
    ])
}
