var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');
var routes = require('./app/routing/routes.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// apiRoutes(app); 
// htmlRoutes(app);
routes(app);  

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});