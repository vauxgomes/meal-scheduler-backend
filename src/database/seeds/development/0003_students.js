exports.seed = async function (knex) {
    console.log('SEEDS: STUDENTS')

    // await knex('students').del()
    await knex('students').insert([
        { user_id: 3, course: 5, enrollment_code: '20220000000001' },
        { user_id: 4, course: 5, enrollment_code: '20220000000002' },
        { user_id: 5, course: 6, enrollment_code: '20220000000003' }
    ])
}
