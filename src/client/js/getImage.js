const replaceWithPlus = (s) => s.split(" ").join("+")

const getImage = async (pixabayURL, city, pixabayKey) => {

    replaceWithPlus(city);
    const res = await fetch(`${pixabayURL}key=${pixabayKey}&q=${replaceWithPlus(city)}`);
    try {
        const cityImages = await res.json();
        return cityImages;
    }
    catch (error) {
        console.log("error", error);
    }
}

module.exports(getImage)