const express = require('express');
const app = express();
const morgan = require('morgan');

const weatherRoutes = require('./api/routes/weather');
const forecastRoutes = require('./api/routes/forecast');

//adding custom middleware handlers
const crosHandler = require('./api/shared/crosHandler');
const errorHandler = require('./api/shared/errorHandler');
const notFoundHandler = require('./api/shared/notFoundHandler');

app.use(morgan('dev'));// dev logging purpose only

app.use(crosHandler);

app.use('/weather', weatherRoutes);
app.use('/forecast', forecastRoutes);

app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;