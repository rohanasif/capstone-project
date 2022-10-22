const receiveData = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json()
        console.log(allData)
        document.getElementById("lat").innerHTML = allData.lat;
        document.getElementById("lng").innerHTML = allData.lng;
        document.getElementById("destination-img").src = allData.img;

    }
    catch (error) {
        console.log("error", error)
    }
}

module.exports(receiveData)