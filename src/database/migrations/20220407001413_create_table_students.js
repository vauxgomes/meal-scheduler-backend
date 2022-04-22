exports.up = function (knex) {
    console.log('Migration: STUDENTS')

    return knex.schema.createTable('students', function (table) {
        table.uuid('user_id').unique().notNullable()

        table.string('enrollment_code').unique().notNullable()
        table.integer('course').unsigned().notNullable()
        table.boolean('food_restriction').notNullable().defaultTo(false)

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())

        table.foreign('user_id').references('users.id')
        table.foreign('course').references('lovs.id')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('students')
}
