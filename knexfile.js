//
require('dotenv').config()

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
            directory: `${__dirname}/src/database/seeds/development`
        },
        useNullAsDefault: true
    },

    // Staging
    staging: {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds/production`
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        }
    }
}
