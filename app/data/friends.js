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

// JSON Objects
var friends = [
  {
    "name":"Gloria",
    "photo":"https://i.pinimg.com/originals/03/43/26/03432656da25a78b7f2681894965c99f.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }

];

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

// Creates New Friend - takes in JSON input
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;          

  // Using a RegEx Pattern to remove spaces from newFriend //routeName creates fifth key value pair 
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  console.log(newFriend);
  characters.push(newFriend);
  res.json(newFriend);
});


// Tells the server listen 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});