exports.seed = async function (knex) {
    console.log('SEEDS: STUDENTS')

    // await knex('students').del()
    await knex('students').insert([
        { user_id: 2, course: 5 },
        { user_id: 3, course: 5 },
        { user_id: 4, course: 6 }
    ])
}
