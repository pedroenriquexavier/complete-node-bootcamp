const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) middlewares
app.use(morgan('dev'));

app.use(express.json());

/* app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
}); */

// 2) route handlers

//app.get('/api/v1/tours', getAllTours);
// to make optional parameters add '?' to it -> tours/:id?
/* app.get('/api/v1/tours/:id', getTour);
app.post('/api/v1/tours', createTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour); */

// 3) routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 4) start the server

module.exports = app;
