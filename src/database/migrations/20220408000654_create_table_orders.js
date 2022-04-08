exports.up = function (knex) {
    console.log('Migration: ORDERS')

    return knex.schema.createTable('orders', function (table) {
        table.increments('id')

        table
            .integer('user_id')
            .unique()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')

        table
            .integer('schedule_id')
            .unique()
            .references('id')
            .inTable('schedules')
            .onDelete('CASCADE')

        table.boolean('like').defaultTo(null)
        table.unique(['user_id', 'schedule_id'])

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('orders')
}
