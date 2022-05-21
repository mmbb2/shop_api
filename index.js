require('dotenv').config();
const express = require("express")
const connect = require('./db/connection')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routers/index')
const path = require('path')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)



const start = async () => {
    try {
        app.listen(PORT, () => {
            connect()
            console.log(`sever started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
    
}

start()