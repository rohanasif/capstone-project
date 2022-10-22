const dotenv = require('dotenv');
dotenv.config();
function MeaningCloud(obj) {
    return obj;
}
var textapi = new MeaningCloud({
    application_key: process.env.API_KEY
});
projectData = {};

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('../client'));

app.get("/all", function sendData(req, res) {
    res.send(projectData);
})

app.post("/add", (req, res) => {
    projectData['lat'] = req.body.lat;
    projectData['lng'] = req.body.lng;
    projectData['countryCode'] = req.body.countryCode;
    projectData['image'] = req.body.image;
    res.send(projectData);
})

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "../client/views" })
})

// Setup Server
app.listen(3000, () => {
    console.log("Listening on port 3000")
    console.log("Go to http://localhost:3000")
})
