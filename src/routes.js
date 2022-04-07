// Imports
const express = require('express')
const routes = express.Router()

// Controllers
const UserController = require('./controllers/UserController')
const StudentController = require('./controllers/StudentController')
const MealController = require('./controllers/MealController')

// Users
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// Students
routes.get('/students', StudentController.index)
routes.get('/students/:id', StudentController.show)
routes.post('/students', StudentController.create)
routes.put('/students/:id', StudentController.update)
routes.delete('/students/:id', StudentController.delete)

// Meals
routes.get('/meals', MealController.index)
routes.get('/meals/:id', MealController.show)
routes.post('/meals', MealController.create)
routes.put('/meals/:id', MealController.update)
routes.delete('/meals/:id', MealController.delete)

// Export
module.exports = routes
