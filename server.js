const express = require('express');
const mongoose = rquire("mongoose");

//initializing express
const app = express()

//bodyperser middleware
app.use(express.json())