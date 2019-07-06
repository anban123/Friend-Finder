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



// Tells the server listen 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});





