exports.seed = async function (knex) {
    console.log('SEEDS: USERS')

    await knex('users').del()
    await knex('users').insert([
        { name: 'Root', username: 'root', password: '123', access: 0 },
        { name: 'Admin', username: 'admin', password: '123', access: 1 },
        { name: 'Student 1', username: 'student_1', password: '123', access: 2 },
        { name: 'Student 2', username: 'student_2', password: '123', access: 2 },
        { name: 'Student 3', username: 'student_3', password: '123', access: 2 }
    ])
}
