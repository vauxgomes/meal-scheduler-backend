exports.up = function (knex) {
    console.log('Migration: MEALS')
    const uuidFn = knex.client.config.uuid

    return knex.schema.createTable('meals', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw(uuidFn))

        table.string('title', 255).notNullable()
        table.text('description').notNullable()
        table.boolean('visible').notNullable().defaultTo(true)

        table.integer('energy').defaultTo(0)
        table.integer('carbohydrates').defaultTo(0)
        table.integer('proteins').defaultTo(0)
        table.integer('lipids').defaultTo(0)

        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('meals')
}
