// Imports
const express = require('express')
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()

const { PORT, NODE_ENV, TIME_ZONE } = process.env

// Routes
const routes = require('./routes')

// App
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

// PORT
app.listen(PORT)

// Start message
console.log('Server Running')
console.log(` - PORT ${PORT}`)
console.log(` - ENVIRONMENT: ${NODE_ENV}`)
console.log(` - TIMEZONE: ${TIME_ZONE}`)
