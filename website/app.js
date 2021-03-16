/* Global Variables */
const zipInput = document.querySelector("#zip");
const btn = document.querySelector("#generate");
const tempNow = document.querySelector("#temp");
const content = document.querySelector(".myInput");
const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
// Personal API Key for OpenWeatherMap API
const apiKey  = ",us&units=metric&appid=10848613b51c2bf8be9b2c05472c8692";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let timeNow = d.getHours()+':'+ d.getMinutes()+':'+ d.getSeconds();

// Event listener to add function to existing HTML DOM element
// This Event Listener is on the generate button to listen to a click then execute the updateData function
btn.addEventListener("click" , updateData);

/* Function called by event listener */
function updateData (){
    getData().then(function(data){
        postData('/postData',{
            date:newDate, 
            time:timeNow,
            temp:data.main.temp, 
            content:content.value,
        });
        updateUI();
    });   
};

/* Function to GET Web API Data*/
//This is a GET request to the openweather API
const getData = async () => {
    const newURL = await fetch (`${baseURL}${zipInput.value}${apiKey}`);
    console.log(newURL);
    try{
        const data = await newURL.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("error",error);
    }
}; 
           
/* Function to POST data */
//This is a POST request to post data to the client server to help the updateUI function while getting the data and showing it to user
const postData = async (url = '' , data ={}) => {
    console.log(data);
    const response = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch (error) {
        console.log("error", error);
    };
};

/* Function to GET Project Data and update it to the user */
const updateUI = async ()=> {
    // Here i wait for the data on the route "/all" then update the object to user with the new data
    const updatedData = await fetch ("/all");
    console.log(updatedData);
    try{
        const weatherData = await updatedData.json();
        // Here i set the values inside the object weatherData to the updated values 
        document.getElementById("date").innerHTML = 'Date : '+ weatherData.date;
        document.getElementById("time").innerHTML ='Time : ' + timeNow;
        document.getElementById("temp").innerHTML = 'Temperature : ' + weatherData.temp+ '°C';
        document.getElementById("content").innerHTML = 'Content : ' + weatherData.content;
    }catch(error){
        console.log("error" , error);
    };
};
