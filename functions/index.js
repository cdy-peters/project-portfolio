const functions = require("firebase-functions");

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/choropleth-timelines", (req, res) => {
  res.redirect("https://choropleth-timelines.vercel.app/");
});

app.get("/online-photo-editor", (req, res) => {
  res.redirect("https://online-photo-editor.vercel.app/");
});

app.get("*", (req, res) => {
    res.redirect("/");
});

exports.app = functions.https.onRequest(app);