/*
let baseURL = 'api.openweathermap.org/data/2.5/weather?zip=';
let apiKey =  '&APPID=129c5fd96e82a383208578208624503f';
const newZip = document.getElementById('zip').value;
const feel = document.getElementById('feelings').value;

// Event listener to add function to existing HTML DOM element 
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) {
/* Function called by event listener 
getZip(baseURL, newZip, apiKey).then(function (projectData){

    console.log(projectData);
    postData('/addWeather', {zip:newZip,feel:feel});
}).then(
    updateUI()
)

}


const updateUI = async (baseURL, zip, key) => {
    const request = await fetch(baseURL+zip+key);
    try{
      const allData = await request.json();
      document.getElementById('date').innerHTML = allData[0].date;
      document.getElementById('temp').innerHTML = allData[0].temp;
      document.getElementById('content').innerHTML = allData[0].feel;
  
    }catch(error){
      console.log("error", error);
    }
  }



/* Function to GET Web API Data
const getZip = async (baseURL, zip, key) => {

   const res = await fetch(baseURL+zip+key)
  // const response = await fetch('/all');

    try {
        const result = await res.json();
        return result;
        console.log(result);
        
        } catch(error) {
  
            // appropriately handle the error
             console.log("error", error);
         }
  }*/