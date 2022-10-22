const geoURL = "api.geonames.org/search?";
const geoUsername = `${process.env.GEO_USERNAME}`;
const weatherKey = `${process.env.WEATHER_KEY}`;
const weatherURL = "https://api.weatherbit.io/v2.0/current?";
const pixabayKey = `${process.env.PIXABAY_KEY}`;
const pixabayURL = "https://pixabay.com/api/?";

import getCity from getCity;
import getWeather from getWeather;
import getImage from getImage;
import postData from postData;
import receiveData from receiveData;

let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    const city = document.getElementById("city");

    if (city !== "") {
        getCity(geoURL, city, geoUsername)
            .then(city => getImage(pixabayURL, city, pixabayKey))
            .then(cityData => getWeather(weatherKey, weatherURL, cityData))
            .then(function (data) {
                postData("/add", { lat: data.lat, lng: data.lng, countryCode: data.countryCode, image: data.image })
            }).then(function () {
                receiveData()
            }).catch(function (error) {
                console.log(error);
                alert("Invalid city");
            })
    }
})