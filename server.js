var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var path = require("path")

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// for converting input from browser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//sets express instance, app, to use handlebars
app.engine("handlebars", exphbs({
    default: "main"
}));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("App is listening on PORT " + PORT);
})