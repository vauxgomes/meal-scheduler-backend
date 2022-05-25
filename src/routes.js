// Imports
const express = require('express')
const routes = express.Router()

// Middleware
const auth = require('./middleware/auth')
const { accesses, roles } = require('./middleware/roles')

// Controllers
const AccountController = require('./controllers/AccountController')
const UserController = require('./controllers/UserController')
const StudentController = require('./controllers/StudentController')
const MealController = require('./controllers/MealController')
const ScheduleController = require('./controllers/ScheduleController')
const OrderController = require('./controllers/OrderController')
const WeekController = require('./controllers/WeekController')

// Account
routes.post('/login', AccountController.register)

// Users
routes.get(
    '/users',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    UserController.index
)
routes.get('/users/:id', auth, UserController.show)
routes.post(
    '/users',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    UserController.create
)
routes.put('/users/:id', auth, UserController.update)
routes.delete(
    '/users/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    UserController.delete
)

// Students
routes.get(
    '/students',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    StudentController.index
)
routes.get('/students/:id', auth, StudentController.show)
routes.post(
    '/students',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    StudentController.create
)
routes.put('/students/:user_id', auth, StudentController.update)
routes.delete(
    '/students/:user_id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    StudentController.delete
)

// Meals
routes.get(
    '/meals',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    MealController.index
)
routes.get(
    '/meals/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    MealController.show
)
routes.post(
    '/meals',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    MealController.create
)
routes.put(
    '/meals/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    MealController.update
)
routes.delete(
    '/meals/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    MealController.delete
)

// Schedules
routes.get(
    '/schedules',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    ScheduleController.index
)
routes.get(
    '/schedules/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    ScheduleController.show
)
routes.post(
    '/schedules',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    ScheduleController.create
)
routes.put(
    '/schedules/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    ScheduleController.update
)
routes.delete(
    '/schedules/:id',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    ScheduleController.delete
)

// Orders
routes.get('/orders', auth, roles([accesses.USER]), OrderController.index)
routes.get('/orders/:id', auth, roles([accesses.USER]), OrderController.show)
routes.post('/orders', auth, roles([accesses.USER]), OrderController.create)
routes.put('/orders/:id', auth, roles([accesses.USER]), OrderController.update)

// Orders ADMIN
routes.post(
    '/orders/onbehalfof/student/:enrollment_code',
    auth,
    roles([accesses.ROOT, accesses.ADMIN]),
    OrderController.createOnBehalfOf
)

// Weeks
routes.get('/weeks', auth, roles([accesses.USER]), WeekController.index)

// Export
module.exports = routes
