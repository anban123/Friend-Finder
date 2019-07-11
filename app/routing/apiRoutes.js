// Homework due 7.9.19

var friends = require("../data/friends");

module.exports = function(app) { 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Function to cal best match, update array, and modal
  app.post("/api/friends", function(req, res) {

    // Grabs the score array from user input and stores it in a variable
    var userInput = req.body;
    var userScores = userInput.scores;
    console.log("userScores=======================", userInput);
    
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
      // for (var j = 0; j < userScores.length; j++) {
      //   var currentScore = currentFriend.scores;
      //   totalDiff += Math.abs(parseInt(currentScore) - parseInt(userScores));
      // }
    
      // Compare difference in scores and resets bestMatch if user score is lower
      if (totalDiff < bestMatch.scores) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.scores = currentFriend.scores;
      }
    }
    // Push the user's info into the friends array
    // friends.push(req.body);

    // Modal pop-up to display the best match to the user 
    res.json({
      matchName: bestMatch.name,
      matchPhoto: bestMatch.photo
    });
  });
};