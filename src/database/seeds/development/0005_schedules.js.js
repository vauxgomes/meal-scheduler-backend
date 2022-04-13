exports.seed = async function (knex) {
    console.log('SEEDS: SCHEDULES')

    await knex('schedules').del()
    await knex('schedules').insert([
        { meal_id: 1, date: '2022-04-01 00:00:00', time: 10 },
        { meal_id: 2, date: '2022-04-01 00:00:00', time: 11 },
        { meal_id: 2, date: '2022-04-01 00:00:00', time: 12 },
        { meal_id: 3, date: '2022-04-04 00:00:00', time: 10 },
        { meal_id: 4, date: '2022-04-04 00:00:00', time: 11 },
        { meal_id: 4, date: '2022-04-04 00:00:00', time: 12 },
        { meal_id: 5, date: '2022-04-05 00:00:00', time: 10 },
        { meal_id: 6, date: '2022-04-05 00:00:00', time: 11 },
        { meal_id: 6, date: '2022-04-05 00:00:00', time: 12 },
        { meal_id: 7, date: '2022-04-06 00:00:00', time: 10 },
        { meal_id: 8, date: '2022-04-06 00:00:00', time: 11 },
        { meal_id: 8, date: '2022-04-06 00:00:00', time: 12 },
        { meal_id: 9, date: '2022-04-07 00:00:00', time: 10 },
        { meal_id: 10, date: '2022-04-07 00:00:00', time: 11 },
        { meal_id: 10, date: '2022-04-07 00:00:00', time: 12 },
        { meal_id: 11, date: '2022-04-08 00:00:00', time: 10 },
        { meal_id: 12, date: '2022-04-08 00:00:00', time: 11 },
        { meal_id: 12, date: '2022-04-08 00:00:00', time: 12 }
    ])
}
