exports.seed = async function (knex) {
    console.log('SEEDS: SCHEDULES')

    await knex('schedules').del()
    await knex('schedules').insert([
        { meal_id: 1, date: '2022-04-11 00:00:00', time: 10 },
        { meal_id: 1, date: '2022-04-11 00:00:00', time: 11 },
        { meal_id: 1, date: '2022-04-11 00:00:00', time: 12 },
        { meal_id: 2, date: '2022-04-12 00:00:00', time: 10 },
        { meal_id: 2, date: '2022-04-12 00:00:00', time: 11 },
        { meal_id: 1, date: '2022-04-13 00:00:00', time: 10 },
        { meal_id: 1, date: '2022-04-13 00:00:00', time: 12 }
    ])
}
