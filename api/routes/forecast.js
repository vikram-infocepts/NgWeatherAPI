const express = require('express');
const router = express.Router();

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env];

const weatherController = require('../controllers/weatherController');
router.get('/:city', weatherController.forecast_get);

module.exports = router;
