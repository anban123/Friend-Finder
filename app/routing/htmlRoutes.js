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

// 2 routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Routes
// ================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"))
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"))
});