exports.up = function (knex) {
    console.log('Migration: ORDERS')
    const uuidFn = knex.client.config.uuid

    return knex.schema.createTable('orders', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw(uuidFn))

        table.uuid('user_id').unique().notNullable()
        table.uuid('schedule_id').unique().notNullable()
        table.boolean('like').defaultTo(null)

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.foreign('user_id').references('users.id').onDelete('CASCADE')
        table
            .foreign('schedule_id')
            .references('schedules.id')
            .onDelete('CASCADE')

        table.unique(['user_id', 'schedule_id'])
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('orders')
}
