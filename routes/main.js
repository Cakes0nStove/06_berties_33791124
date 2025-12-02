// Create a new router
const express = require("express")
const router = express.Router()
const request = require('request')
require('dotenv').config();



// Handle our routes
router.get('/',function(req, res, next){
    res.render('index.ejs')
});

router.get('/about',function(req, res, next){
    res.render('about.ejs')
});

router.get('/books/addbook',function(req, res, next){
    res.render('addbook.ejs')
});

router.get('/weather', function(req, res, next) {

    let city = req.query.city || 'london';
    let apiKey = process.env.API_KEY;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    request(url, function (err, response, body) {
        if (err) {
            next(err);
        } else {
            try {
                let weather = JSON.parse(body);

                if (weather.cod === "404") {
                    return res.render("weather", { weatherData: null, error: "City not found" });
                }

                let weatherData = {
                    name: weather.name,
                    temp: weather.main.temp,
                    feels_like: weather.main.feels_like,
                    humidity: weather.main.humidity,
                    pressure: weather.main.pressure,
                    wind_speed: weather.wind.speed,
                    description: weather.weather[0].description,
                    icon: weather.weather[0].icon
                };

                res.render("weather", { weatherData, error: null });

            } catch (e) {
                res.render("weather", { weatherData: null, error: "Error reading weather data." });
            }
        }
    });

});


// Export the router object so index.js can access it
module.exports = router