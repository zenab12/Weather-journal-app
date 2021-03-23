const projectData = [];

const express = require('express');

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const cors = require('cors');
app.use(cors());

app.use(express.static('Website'));

const port = 10000;

const server = app.listen(port , () => {console.log(`local host is : ${port}`)});

const appData = [{zip:40,feel:'cold'}];


app.post('/addWeather' , addWeather);


function addWeather(req,res){

    newEntry = {

        date : req.body.date,
        temp: req.body.temp,
        content:req.body.content,
        city:req.body.city
    }

    projectData.push(newEntry);
    res.send(projectData);
}


app.get('/all' , getData);

function getData(req,res){

    res.send(projectData);
    console.log(projectData)
}


