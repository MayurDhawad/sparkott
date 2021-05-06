const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const UserApi = require('./routes/userapi')
const MoviesApi = require('./routes/moviesapi')
const multer = require('./routes/multer')

dotenv.config({ path: './config.env'})
require('./db/connection')
const Port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors())
app.use('/userapi', UserApi)
app.use('/moviesapi', MoviesApi)
app.use('/multer', multer)

app.get('/', (req,res)=>{
    res.send("Hello From SparkOTT Server")
})

app.listen(Port, ()=>{
    console.log(`Server running on Port : ${Port}`)
})
