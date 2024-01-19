// General Imports 
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('express-async-errors');
const bodyParser = require('body-parser');


// Security packages 
const cors = require('cors');

// Routers Import
const allroutes = require('./routes')

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


// Yeah, work with app now
const app = express();
app.use(cors()) // Use this after the variable declaration
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

// using routes 
app.use(allroutes);

// using errors component to send error response
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


// starting and setting up the server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to Mongodb Database')
    app.listen(process.env.PORT, () =>
      console.log(`Server is listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
