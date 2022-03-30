const express = require('express');
const mongoose = require("mongoose");

const productRoutes = require('./routes/productRoutes')

//initializing express
const app = express()

//body parser middleware
app.use(express.json())

//DB config
const MONGODB_URI = process.env.MONGODB_URI ||require('./config').mongoDB_URI

//connect to mongoDB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})

//check connection
let db = mongoose.connection;
db.once('open', () =>{
    console.log('Database connected successfully')
})
//check for DB errors
db.on('error', (error) =>{
    console.log(error);
})

//use Routes
app.use('/products', productRoutes)

//define PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})