const express = require('express');
const mongoose = rquire("mongoose");

//initializing express
const app = express()

//body parser middleware
app.use(express.json())

//DB config
const MONGODB_URI= process.inv.MONGODB_URI ||
require('./config').mongoDB_URI

//connect to mongoDB
mongoose.connect(MONGODB_URI, {userNewUrlParser: true, useUnifiedTopology: true})

//check connection
let db = mongoose.connection;
db.once('open', () =>{
    console.log('Database connected successfully')
})
//check for DB errors
db.on('error', (error) =>{
    console.log(error);
})

//define PORT
const PORT = process.inv.PORT || 5000
app.listen(PORT, () =>{
    console.log(`server listening on port ${PORT}`)
})