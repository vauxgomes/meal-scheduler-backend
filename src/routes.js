// Imports
const express = require('express')
const routes = express.Router()
const auth = require('./middleware/auth')

// Controllers
const AccountController = require('./controllers/AccountController')
const UserController = require('./controllers/UserController')
const StudentController = require('./controllers/StudentController')
const MealController = require('./controllers/MealController')
const ScheduleController = require('./controllers/ScheduleController')
const OrderController = require('./controllers/OrderController')

// Account
routes.post('/login', AccountController.register)
// Today
routes.get('/schedules/today/:date/:time', ScheduleController.today)

// Users
routes.get('/users', auth, UserController.index)
routes.get('/users/:id', auth, UserController.show)
routes.post('/users', auth, UserController.create)
routes.put('/users/:id', auth, UserController.update)
routes.delete('/users/:id', auth, UserController.delete)

// Students
routes.get('/students', auth, StudentController.index)
routes.get('/students/:id', auth, StudentController.show)
routes.post('/students', auth, StudentController.create)
routes.put('/students/:user_id', auth, StudentController.update)
routes.delete('/students/:user_id', auth, StudentController.delete)

// Meals
routes.get('/meals', auth, MealController.index)
routes.get('/meals/:id', auth, MealController.show)
routes.post('/meals', auth, MealController.create)
routes.put('/meals/:id', auth, MealController.update)
routes.delete('/meals/:id', auth, MealController.delete)

// Schedules
routes.get('/schedules', auth, ScheduleController.index)
routes.get('/schedules/:id', auth, ScheduleController.show)
routes.post('/schedules', auth, ScheduleController.create)
routes.put('/schedules/:id', auth, ScheduleController.update)
routes.delete('/schedules/:id', auth, ScheduleController.delete)

// Orders
routes.get('/orders', auth, OrderController.index)
routes.get('/orders/:id', auth, OrderController.show)
routes.post('/orders', auth, OrderController.create)
routes.put('/orders/:id', auth, OrderController.update)
routes.delete('/orders/:id', auth, OrderController.delete)

// Export
module.exports = routes
