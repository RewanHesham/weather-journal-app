//const { response } = require("express");

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

// Event listener to add function to existing HTML DOM element
// This Event Listener is on the generate button to listen to a click then execute the updateData function
btn.addEventListener("click" , updateData);

/* Function called by event listener */
function updateData (){
    getData(baseURL, zipInput.value, apiKey).then(
        postData('/postData',{
            date:newDate, 
            temp:tempNow, 
            content:content
        })
    ); 
    updateUI();
};

/* Function to GET Web API Data*/
//This is a GET request to the openweather API
const getData = async (baseURL,zipInput,apiKey) => {
    //const newURL = await fetch (`${baseURL}${zipInput.value}${apiKey}`);
    const newURL = await fetch (baseURL+zipInput+apiKey);
    try{
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log("error",error);
    }
}; 
           
/* Function to POST data */
//This is a POST request to post data to the client server 
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

/* Function to GET Project Data */
const updateUI = async ()=> {
    const updatedData = await fetch ("/all");
    try{
        const weatherData = await updatedData.json();
        document.getElementById("date").innerHTML = weatherData.date;
        document.getElementById("temp").innerHTML = weatherData.temp;
        document.getElementById("content").innerHTML = weatherData.content;
    }catch(error){
        console.log("error" , error);
    };
};
