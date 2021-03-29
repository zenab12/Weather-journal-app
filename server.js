const projectData = [];
let express = require('express');

let bodyParser = require('body-parser');

let cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static("Website"));

const port = 2020;

const server = app.listen(port, () => { console.log(`localHost is : ${port}`); });


app.post('/addTheWeather', addTheWeather);

function addTheWeather(req, res) {

    let Container = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content
    }

    projectData.push(Container);
    res.send(projectData);


}


app.get('/all', getWeather);

function getWeather(req, res) {

    res.send(projectData)
}