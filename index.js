const express = require('express')

const app = express()

const cors = require('cors')
const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParser = require('body-parser')
// 後面接著.json的意思？
app.use(bodyParser.json())

// const db = require('./db')
// const Event = require('./event/model')
const eventRouter = require('./event/router')
app.use(eventRouter)
const userRouter = require('./user/router')
app.use(userRouter)
const authRouter = require('./auth/router')
app.use(authRouter)

const port = 4000
app.listen(port, () => console.log(`Listen on port ${port}`))
