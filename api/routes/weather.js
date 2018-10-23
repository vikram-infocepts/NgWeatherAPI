const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weatherController');
router.get('/:city', weatherController.weather_get);

module.exports = router;
