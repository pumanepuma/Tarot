require('dotenv').config()
const express = require('express')
const bodyParser = require ('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const router = require('./routes/indexRouter')
const path = require('path')


const app = express()
app.use(bodyParser.json())
app.use('/images',express.static(path.join(__dirname,'images')))
app.use(cors())

app.use('/api',router)

const PORT = process.env.PORT || 5001

const start = async() => {
    try{
        await mongoose.connect(process.env.db, {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        app.listen(PORT, () => {
            console.log(`app listening on port ${PORT}`)
        })
    }
    catch(e){
        console.log(e)
    }
}

start()
