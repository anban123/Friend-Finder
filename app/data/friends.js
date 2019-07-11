// Homework due 7.9.19

// Dependencies
// var express = require("express");
// var path = require("path");

// // Sets up the Express app & makes port dynamic/3000
// var app = express();
// var PORT = process.argv.PORT || 3000;

// // Sets up Express app to handle data parsing - middleware/translator
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// JSON Objects
var friends = [
  {
    "name":"Gloria",
    "photo":"https://i.pinimg.com/originals/03/43/26/03432656da25a78b7f2681894965c99f.jpg",
    "scores":[
        5,1,4,4,5,1,2,5,4,1
      ]
  },
  {
    "name":"Fred",
    "photo":"https://media.wired.com/photos/593259f826780e6c04d2b1d9/master/w_660,c_limit/11362424926_3f0f50a397_b.jpg",
    "scores":[
        2,4,1,2,2,2,4,5,1,2
      ]
  },
  {
    "name":"Sally",
    "photo":"https://roanokecountydemocrats.com/wp-content/uploads/donkey_holding_flowers_16x9.jpg",
    "scores":[
        5,4,1,1,2,2,3,5,1,2
      ]
  }
];

module.exports = friends;   //missing dots.......

