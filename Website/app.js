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

postData('/all', {zip:23,feel:'cold'});

postData('/all', {zip:45,feel:'worm'});

// Personal API Key for OpenWeatherMap API

//let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//let apiKey =  '&APPID=129c5fd96e82a383208578208624503f';

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&APPID=93f2fce913853464e6211aafd3aa5678';
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener*/

function performAction() {
    let newZip = document.getElementById('zip').value;
    let feel = document.getElementById('feelings').value;

    getZip(baseURL, newZip, apiKey).then(function (data){
    
        console.log(data);
        postData('/all', {date:newDate,temp:data.list[0].main.temp,content:feel});
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


/* Function to GET Project Data */

const updateUI = async () => {
    const request = await fetch('/all');
    try{
      let allData = await request.json();
      document.getElementById('date').innerHTML = `date : ${allData[0].date}`;
      document.getElementById('temp').innerHTML = `tempe: ${allData[0].temp}`;
      document.getElementById('content').innerHTML = `content: ${allData[0].feel}`;
  
    }catch(error){
      console.log("error", error);
    }
  }


