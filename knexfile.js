const dotenv = require('dotenv')
dotenv.config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

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
        useNullAsDefault: true
    },

    // Production
    production: {
        client: 'mysql',
        connection: {
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE
        },
        seeds: {
            directory: `${__dirname}/src/database/seeds/`
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`
        }
    }
}
