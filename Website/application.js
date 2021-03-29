const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&APPID=129c5fd96e82a383208578208624503f";

let date = new Date();

let newDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

document.getElementById('generate').addEventListener('click', performAction);


function performAction() {


    let Zip = document.getElementById('zip').value;
    let feelings = document.getElementById('feelings').value;

    getZipCode(baseUrl, Zip, apiKey).then(function(data) {

        console.log(data);
        postData('/addTheWeather', { date: newDate, temp: data.main.temp, content: feelings });
        updateUI();
    });
}


const getZipCode = async(baseURL, zip, key) => {

    const res = await fetch(baseURL + zip + key);
    try {
        const data = await res.json();
        return data;

    } catch (err) {

        console.log("err", error);
    }


}


let postData = async(url = ' ', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: "same-origin",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log(newData)
        return newData;
    } catch (error) {
        console.log('error', error)
    }
}


postData('/addTheWeather', { zip: 3333, feelings: 'sad' });


const updateUI = async() => {

    const request = await fetch('/all');
    try {
        let bigContainer = await request.json();

        document.getElementById('date').innerHTML = `date : ${bigContainer[bigContainer.length - 1].date}`;
        document.getElementById('temp').innerHTML = `temp : ${bigContainer[bigContainer.length - 1].temp}`;
        document.getElementById('content').innerHTML = `I Feel  ${bigContainer[bigContainer.length - 1].content}`;


    } catch (error) {
        console.log('error', error)
    }
}