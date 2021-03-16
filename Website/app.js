
// Personal API Key for OpenWeatherMap API
const baseURL = 'https://api.nasa.gov/planetary/apod?'
const apiKey= 'api_key=yyEzGKBeW4HmZXwGpgHEMu3wV6TVhw3RW6DmBJJN';
const newZip =  document.getElementById('zip').value;

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
/* Function called by event listener */
getZip(baseURL,newZip, apiKey)
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

