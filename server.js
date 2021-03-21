// Setup empty JS object to act as endpoint for all routes
const projectData = [{}];
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

const appData = [{zip:40,feel:'cold'}];

// Initialize all route with a callback function
app.get('/all', getData)

// Callback function to complete GET '/all'\

function getData (req,res){
    res.send(projectData);
   
    console.log(projectData)

}

// Post Route

app.post('/all',function(req,res){
    res.send('post recieved')
});


app.post('/all', addWeather);

function addWeather (req,res){

   let newEntry = {
   date : req.body.date,
   temp: req.body.temp,
   content:req.body.content
  }

  projectData.push(newEntry);
  res.send(projectData);
  console.log(projectData)
}