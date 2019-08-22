var path = require('path');
// const express = require('express')
// const app = express.Router()

function htmlRoutes(app) {
  app.get("/",function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
    // res.send("hello")
    console.log("survey")
    // res.json("hellow")
  });

 

}

module.exports = htmlRoutes;