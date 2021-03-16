# Weather-Journal App Project

## Description
    *In this project i am building an asynchronous web app that uses Web API and user data to dynamically update the UI.
    *The user enter zipcode in the field 'Enter Zipcode here'.
    *The user enter content in the field 'How are you feeling today?'.
    *Then creat a URL using the main URL, the Zipcode from user and the API Key from Open Weather Map Website to make a GET request to the server and get data of the 
     zipcode user entered.
    *The data received from Open Weather API are then used to make a POST request to the server, as well as data entered by the user.
    *Then a GET request to the server to show the all the data to the user in the 'Most Recent Entry' field.
    *Showing the Date, Time, Temperature and Content (what the user is feeling today).
  
  
## Table of Contents

   ###HTML file:
   
       *The file includes some changes from the original ( adding time Div to the enteryholderDiv - attaching the js file - adding footer).
       
   ###CSS file:
   
      *The file includes changes to cope with the changes in HTML layout of the added fields and setting the layout of the classes.
      
   ###Two JavaScripts files including:
   
   ####app.js:
     
        *The global variables used in the code.
        *All the main functions ( 'updateData' the function of the event listener- 'getData' asunc function to GET Web API Data from OpenWeather website- 
	 'postData' async function to POST data to the app endpoint in anjs object to help the updateUI function while getting the data and showing it to 
	  user- 'updateUI' async function to GET Project Data and update it to the user).
        *The event listeners ( Mouse click from the user on the 'Generate' button, which will fire the 'updateData' function;which get the zip code and
	  feelings from the user and post the date, time,temp related to the users entry and the user's feelings).
	 
   ####server.js:
   
         *Istall express(), Cors package and body-Parser package.
         *Require express(), and create an instance of the app using express.
	 *Configuring express to use body-parser as middle-ware.
	 *Require cors for cross origin allowance.
	 *Initialize the main project folder.
	 *Setup server port.
	 *GET route setup on the server side with the first argument '/all', and the second argument a callback function to return 
	  the JS object created at the top of server code.
	 *POST route with a function which create a new entry in the apps endpoint (projectsData) consisting of the data received from the client side POST.
	 
     

## Used Languages
    *HTML
    *JavaScript
    *CSS
    

	   
