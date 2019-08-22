var friendsData = require('../data/friends.js');
var path = require('path');

function routes(app) {



app.get("/",function (req, res) {
    console.log("home")
    res.sendFile(path.join(__dirname + '/../public/home.html'));
   
  });

  app.get('/survey', function (req, res) {
    console.log("survey")
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
    // res.send("hello")
    
    // res.json("hellow")
  });

  app.get('/api/friends', function (req, res) {
    res.json(friendsData);
    console.log("api")
  });

  app.post('/api/friends', function (req, res) {

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: []
    };
    var scoresArray = [];
    for (var i = 0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i]))
    }
    newFriend.scores = scoresArray;

    var scoreComparisionArray = [];
    for (var i = 0; i < friendsData.length; i++) {

      var currentComparison = 0;
      for (var j = 0; j < newFriend.scores.length; j++) {
        currentComparison += Math.abs(newFriend.scores[j] - friendsData[i].scores[j]);
      }

      scoreComparisionArray.push(currentComparison);
    }

    var bestMatchPosition = 0;
    for (var i = 1; i < scoreComparisionArray.length; i++) {

      if (scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]) {
        bestMatchPosition = i;
      }

    }

    var bestFriendMatch = friendsData[bestMatchPosition];

    res.json(bestFriendMatch);

    friendsData.push(newFriend);

  });

}

module.exports = routes;

    
  