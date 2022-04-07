exports.up = function (knex) {
    console.log('Migration: STUDENTS')

    return knex.schema.createTable('students', function (table) {
        table
            .integer('user_id')
            .unique()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')

        table.integer('course').references('id').inTable('lovs')
        table.boolean('food_restriction').notNullable().defaultTo(false)

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('students')
}
