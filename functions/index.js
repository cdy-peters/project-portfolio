const functions = require("firebase-functions");

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

exports.app = functions.https.onRequest(app);
