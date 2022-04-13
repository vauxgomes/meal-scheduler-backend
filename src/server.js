// Imports
const express = require('express')
const cors = require('cors')
//
const routes = require('./routes')
const { port, environment } = require('./config')

// App
const app = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(routes)

// PORT
app.listen(port)

// Start message
console.log(`Server Running on PORT ${port}`)
console.log(`Environment: ${environment}`)
