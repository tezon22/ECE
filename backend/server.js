const path = require('path')
const express = require('express')
const downloadRoute = require("./routes/downloads")
const uploadRoute = require('./routes/upload')
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

app.use('/api/upload',uploadRoute)

// pdf api- both getting all 
app.use('/api/pdf',downloadRoute)
app.use('/api/ece',require('./routes/registerRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.listen(port, () => console.log(`Server started on port ${port}`))