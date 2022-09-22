const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
