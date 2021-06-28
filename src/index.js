const express = require("express");
const app = express();
const port = 3000;

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

app.post("/home", function (req, res) {
  res.send("Activated.");
});

app.get("/code", (req, res) => {
  res.sendStatus(401);
});

app.listen(port, () => {
  console.log("Listening to http://localhost:$(port)");
});
