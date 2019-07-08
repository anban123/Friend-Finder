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
  },
  {
    "name":"Fred",
    "photo":"https://media.wired.com/photos/593259f826780e6c04d2b1d9/master/w_660,c_limit/11362424926_3f0f50a397_b.jpg",
    "scores":[
        2,
        4,
        1,
        2,
        2,
        2,
        4,
        5,
        1,
        2
      ]
  }

];

app.post("/api/friends", function(req, res) {
  var userInput = req.body;
  var userScores = userInput.scores;
  
  // Set bestMatch variable to be replaced when there's a lower score 
  var bestMatch = {
    name: "",
    photo: "",
    scores: 1000
  };

  // Set total difference so it can be used later
  var totalDiff = 0;

  // Loop through each index's scores in the friends array
  for (var i = 0; i < friends.length; i++) {
    var currentFriend = friends[i];
    totalDiff = 0;

    // Loop through user's scores and counts the difference in scores
    for (var j = 0; j < userScores[j]; j++) {
      var currentScore = currentFriend.scores;
      totalDiff += Math.abs(parseInt(currentScore) - parseInt(userScores));
    }
  
    // Compare difference in scores and resets bestMatch if user score is lower
    if (totalDiff < bestMatch.scores) {
      bestMatch.name = currentFriend.name;
      bestMatch.photo = currentFriend.photo;
      bestMatch.scores = currentFriend.scores;
    }
  }
  // Push the user's info into the friends array
  friends.push(req.body);

  // Modal pop-up to display the best match to the user 
  res.json({
    matchName: bestMatch.name,
    matchPhoto: bestMatch.photo
  });

})

// Tells the server listen 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});