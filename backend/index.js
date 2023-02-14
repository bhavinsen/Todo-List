const express = require('express')
const app = express()
const tasks = require('./routes/todoRoute')
const port = process.env.PORT || 8080
const connectDB = require("./db/connection")
const cors = require('cors')

app.use(express.json())
app.use(cors())

connectDB();

app.use('/api/v1', tasks)

app.listen(port, console.log(`server in running on port ${port}`))