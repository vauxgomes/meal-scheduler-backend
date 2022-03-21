// Imports
const express = require('express')
const routes = express.Router()

// 
const UserController = require('./controllers/UserController')
const StudentController = require('./controllers/StudentController')
const MenuController = require('./controllers/MenuController')
const ScheduleController = require('./controllers/ScheduleController')
const MealController = require('./controllers/MealController')

// Users
routes.get('/users/:id?', UserController.index)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

// Student
routes.get('/students:id?', StudentController.index)
routes.post('/students', StudentController.create)
routes.put('/students/:id', StudentController.update)

// Menu
routes.get('/menus/:id?', MenuController.index)
routes.post('/menus', MenuController.create)
routes.put('/menus/:id', MenuController.update)
routes.delete('/menus/:id', MenuController.delete)

// Schedule
routes.get('/schedules/:id?', ScheduleController.index)
routes.post('/schedules', ScheduleController.create)
routes.put('/schedules/:id', ScheduleController.update)
routes.delete('/schedules/:id', ScheduleController.delete)

// Meal
routes.get('/meals/:id?', MealController.index)
routes.post('/meals', MealController.create)
routes.put('/meals/:id', MealController.update)
routes.delete('/meals/:id', MealController.delete)

// Export
module.exports = routes