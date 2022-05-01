const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000

// instance of express
const app = express()

app.use(cors())
app.use(express.json())

// routers
const userRouter = require('./routers/userRouter')

// main routes
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`SERVER RUNNING: ${PORT}`)
})