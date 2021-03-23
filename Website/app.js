// Personal API Key for OpenWeatherMap API

const  baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=129c5fd96e82a383208578208624503f';

let date = new Date();

let newDate = date.getDate() +'-' + ( date.getMonth() +1) +'-'+ date.getFullYear();

// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);


/* Function called by event listener*/

function performAction() {
  let newZip = document.getElementById('zip').value;
  let feel = document.getElementById('feelings').value;

    getZip(baseURL, newZip, apiKey).then(function (data){
    
        console.log(data);
        postData('/addWeather', {date:newDate,temp:data.main.temp,content:feel,city:data.name});
        updateUI()
    })
    
    
    }


/* Function to GET Web API Data*/

const getZip = async (baseURL, zip, key)=>{

    const res = await fetch(baseURL+zip+key)
  // const res = await fetch('/allWeatherData')
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
  
       // appropriately handle the error
  
      console.log("error", error);
    }
  }


/* Function to POST data */
let postData = async ( url = '', data = {})=>{
  console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

postData('/addWeather', {zip:2233,feel:'cold'});

postData('/addWeather', {zip:4235,feel:'worm'});


/* Function to GET Project Data */

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      let allData = await request.json();
      document.getElementById('date').innerHTML = `date : ${allData[allData.length-1].date}`;
      document.getElementById('temp').innerHTML = `tempe: ${allData[allData.length-1].temp}`;
      document.getElementById('content').innerHTML = `content: i feel ${allData[allData.length-1].content}`;
      document.getElementById('city').innerHTML = `city:  ${allData[allData.length-1].city}`

  
    }catch(error){
      console.log("error", error);
    }
  }


