var config = {
    development: {
        weatherapi: {
            units: 'metric',
            apikey: '25369a198ace88d96107b4a9f5c09048',
            baseUrl: 'http://api.openweathermap.org/data/2.5/',
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        weatherapi: {
            units: 'metric',
            apikey: '25369a198ace88d96107b4a9f5c09048',
            baseUrl: 'http://api.openweathermap.org/data/2.5/',
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    }
};

module.exports = config;