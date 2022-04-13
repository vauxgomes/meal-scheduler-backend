const { db } = require('./src/config')

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

    // Production
    production: {
        client: 'mysql',
        connection: {
            host: db.host,
            port: db.port,
            user: db.user,
            password: db.password,
            database: db.database
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