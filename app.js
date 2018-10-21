// About the structure: https://www.terlici.com/2014/08/25/best-practices-express-structure.html

var express = require("express");
var app = express();

//use static files
app.use("/public", express.static("public"));

//with "app.get(root, fuction{})" we must show a html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/" + "index.html"); //__dirname is the location of this js
});

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/views/" + "index.html"); //__dirname is the location of this js
});

app.get("/menu.html", function(req, res) {
  res.sendFile(__dirname + "/views/" + "menu.html"); //__dirname is the location of this js
});

app.get("/regular-page.html", function(req, res) {
  res.sendFile(__dirname + "/views/" + "regular-page.html"); //__dirname is the location of this js
});

app.get("/contact.html", function(req, res) {
  res.sendFile(__dirname + "/views/" + "contact.html"); //__dirname is the location of this js
});

//start the server with "listen(port, function{})"
app.listen(3000, function() {
  console.log("App listening on port 3000!");
});
