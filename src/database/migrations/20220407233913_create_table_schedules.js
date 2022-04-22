exports.up = function (knex) {
    console.log('Migration: SCHEDULES')

    return knex.schema.createTable('schedules', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('UUID()'))

        table.uuid('meal_id').notNullable()
        table.integer('time').unsigned().notNullable()
        table.date('date').notNullable()

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.foreign('meal_id').references('meals.id').onDelete('CASCADE')
        table.foreign('time').references('lovs.id')

        table.unique(['date', 'time'])
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('schedules')
}
