const axios = require('axios');

var env = process.env.NODE_ENV || 'development';
var config = require('../../config')[env];

var weatherUrl = config.weatherapi.baseUrl + `weather?units=${config.weatherapi.units}&APPID=${config.weatherapi.apikey}`;
var forecastUrl = config.weatherapi.baseUrl + `forecast?units=${config.weatherapi.units}&APPID=${config.weatherapi.apikey}`;

// get data from config url
exports.weather_get = (req, res, next) => {

    axios
        .get(weatherUrl + `&q=${req.params.city}`)
        .then(function (response) {
            res.status(response.status).json({data: response.data});
        })
        .catch(function (error) {
            res.status(error.response.status).json({ data: error.response.data });
        });

};

// get data from config url
exports.forecast_get = (req, res, next) => {

    axios
        .get(forecastUrl + `&q=${req.params.city}`)
        .then(function (response) {
            res.status(response.status).json({data: response.data});
        })
        .catch(function (error) {
            res.status(error.response.status).json({ data: error.response.data });
        });

};