exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    await knex('users').del()
    await knex('users').insert([
        { name: 'Root', username: 'root', password: '123', access: 0 },
        { name: 'Admin', username: 'admin', password: '123', access: 1 }
    ])
}
