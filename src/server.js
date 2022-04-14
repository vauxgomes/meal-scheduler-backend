// Imports
const express = require('express')
const cors = require('cors')
//
const routes = require('./routes')

// App
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

// PORT
app.listen(process.env.PORT)

// Start message
console.log(` - Server Running on PORT ${process.env.PORT}`)
console.log(` - ENVIRONMENT: ${process.env.NODE_ENV}`)
