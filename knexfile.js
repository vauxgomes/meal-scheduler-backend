const dotenv = require('dotenv')
dotenv.config()

const { DB_CONN_STR } = process.env

//
module.exports = {
    // Development
    development: {
        client: 'sqlite3',
        connection: {
            filename: `${__dirname}/db/dev.sqlite3`
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds/`
        },
        useNullAsDefault: true,
        uuid: `(lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))))`
    },

    // Production
    production: {
        client: 'pg',
        connection: {
            connectionString: DB_CONN_STR,
            ssl: { rejectUnauthorized: false }
        },
        searchPath: ['knex', 'public'],
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds/`
        },
        uuid: 'gen_random_uuid()'
    }
}
