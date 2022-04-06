// Imports
const express = require('express')
const routes = express.Router()

// Controllers
const UserController = require('./controllers/UserController')

// Users
routes.get('/users/:id?', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// Export
module.exports = routes
