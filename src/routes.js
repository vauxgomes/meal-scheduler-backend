// Imports
const express = require('express')
const routes = express.Router()

// Controllers
const AccountController = require('./controllers/AccountController')
const UserController = require('./controllers/UserController')
const StudentController = require('./controllers/StudentController')
const MealController = require('./controllers/MealController')
const ScheduleController = require('./controllers/ScheduleController')
const OrderController = require('./controllers/OrderController')

// Account
routes.post('/login', AccountController.authenticate)

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
routes.put('/students/:user_id', StudentController.update)
routes.delete('/students/:user_id', StudentController.delete)

// Meals
routes.get('/meals', MealController.index)
routes.get('/meals/:id', MealController.show)
routes.post('/meals', MealController.create)
routes.put('/meals/:id', MealController.update)
routes.delete('/meals/:id', MealController.delete)

// Schedules
routes.get('/schedules', ScheduleController.index)
routes.get('/schedules/:id', ScheduleController.show)
routes.get('/schedules/today/:time', ScheduleController.today)
routes.post('/schedules', ScheduleController.create)
routes.put('/schedules/:id', ScheduleController.update)
routes.delete('/schedules/:id', ScheduleController.delete)

// Orders
routes.get('/orders', OrderController.index)
routes.get('/orders/:id', OrderController.show)
routes.post('/orders', OrderController.create)
routes.put('/orders/:id', OrderController.update)
routes.delete('/orders/:id', OrderController.delete)

// Export
module.exports = routes
