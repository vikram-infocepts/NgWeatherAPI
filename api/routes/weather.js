const express = require('express');
const router = express.Router();

// calling controller to get data from weather api
const weatherController = require('../controllers/weatherController');

router.get('/:city', weatherController.weather_get);

module.exports = router;
