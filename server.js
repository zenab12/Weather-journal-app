// Setup empty JS object to act as endpoint for all routes
const projectData = {};
// Express to run server and routes
const express = require('express');

// Start up an instance of app

const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
app.use(Cors());

// Initialize the main project folder
app.use(express.static('Website'));

// Spin up the server

const port = 8080;

// Callback to debug

const server = app.listen(port, ()=>{console.log(`localhist is runnung`);console.log(`localhost:${port}`)})

//const appData = {weather:'cold',feel:'cold'};

// Initialize all route with a callback function

app.get('/all',function(req,res){

    res.send('WeatherJournal');
});

// Callback function to complete GET '/all'

// Post Route

const projdata = [];

/*
app.post('/all',function(req,res){
    res.send('post recieved')
});

app.post('/all', weather);

function weather(req, res){
    let data = req.body;
    console.log(data);
    Projdata.push(data);
}

const weatherData = {
    weather:'winter',
    feel:'cold'
}

app.get('/allWeatherData',function(req,res){
    res.send(weateherData);
    console.log(weatherData)
})
*/
app.post('/addWeather', addWeather);

function addWeather(req,res){

  newEntry = {
    zip: req.body.zip,
    feel: req.body.feel,
    fav: req.body.fav
  }

  projdata.push(newEntry);
  console.log(projdata)
}