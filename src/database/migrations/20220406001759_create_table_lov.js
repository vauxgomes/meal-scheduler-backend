exports.up = function (knex) {
    console.log('Migration: LIST OF VALUES')

    return knex.schema.createTable('lovs', function (table) {
        table.increments('id')

        table.string('class', 50).notNullable()
        table.string('value', 50).notNullable()
        table.string('nice').notNullable()
        table.integer('order').notNullable().defaultTo(0)

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('lovs')
}
