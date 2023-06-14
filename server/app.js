const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const app = express()


//middlewares

app.use(express.json())
app.use(morgan('tiny'))
//routes

app.get("/", (req,res) => {
    res.send("Hello World")
})


//server configurations


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT)
})
