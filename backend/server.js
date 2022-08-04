const express = require('express')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const colors = require('colors')
const cors = require('cors')



connectDB()

const app = express()

app.use(express.json());

app.use(cors())
app.use(express.urlencoded({ extended: false}));

app.use('/api/ece',require('./routes/registerRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))