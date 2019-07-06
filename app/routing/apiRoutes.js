// Homework due 7.9.19

// Dependencies
var express = require("express");
var path = require("path");

// Sets up the Express app & makes port dynamic/3000
var app = express();
var PORT = process.argv.PORT || 3000;

// Sets up Express app to handle data parsing - middleware/translator
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//2 routes
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
  //This will be used to handle incoming survey results. 
  //This route will also be used to handle the compatibility logic.