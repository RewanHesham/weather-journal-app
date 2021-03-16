// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3030;
const server = app.listen(port , listening);

function listening(){
    console.log(`running on localhost : ${port}`);  
};

// Initialize all route with a callback function
// GET Route
// Callback function to complete GET '/all'
app.get('/all' , (req , res) => {
    res.send(projectData);
});

// POST Route
// Callback function to post the data from user to the server route 
app.post('/postData', (req,res) => {
    console.log(req.body);
    projectData = {
        date : req.body.date,
        time : req.body.time,
        temp : req.body.temp,
        content : req.body.content,
    };
    res.send(projectData);
});
