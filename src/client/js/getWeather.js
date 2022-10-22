const getWeather = async (weatherKey, weatherURL, cityData) => {
    const res = await fetch(`${weatherURL}key=${weatherKey}&lat=${cityData.lat}&lon=${cityData.lng}`);
    try {
        const weatherData = await res.json();
        return weatherData;
    }
    catch (error) {
        console.log("error", error)
    }
}

module.exports(getWeather)