// server.js
const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');
const app = express();
var cors = require('cors')

 
app.use(cors())
app.use(bodyParser.json());

// API routes
app.use('/api/students', studentsRouter);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});