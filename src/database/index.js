const { environment } = require('../config')
const knexfile = require('../../knexfile')

const knex = require('knex')(knexfile[environment])
module.exports = knex
