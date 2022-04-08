exports.up = function (knex) {
    console.log('Migration: SCHEDULES')

    return knex.schema.createTable('schedules', function (table) {
        table.increments('id')

        table
            .integer('meal_id')
            .unique()
            .references('id')
            .inTable('meals')
            .onDelete('CASCADE')

        table.date('date').notNullable()
        table.integer('time').references('id').inTable('lovs').notNullable()

        table.unique(['date', 'time']);

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('schedules')
}
