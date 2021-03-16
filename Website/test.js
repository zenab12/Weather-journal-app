
let baseURL = 'https://api.nasa.gov/planetary/apod?'
let apiKey =  '&xMZO5dUyTtV7vA6Fad88UF7ANRkifkICiPbrde3x';

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
const newZip =  document.getElementById('zip').value;
/* Function called by event listener */
getZip(baseURL,newZip, apiKey)
}

/* Function to GET Web API Data*/
const getZip = async (baseURL, zip, key)=>{

   // const res = await fetch(baseURL+zip+key)
   const res = await fetch('/addWeather')
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
  
       // appropriately handle the error
  
      console.log("error", error);
    }
  }