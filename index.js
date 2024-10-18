const express = require("express");
const PORT = 8000;

const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(PORT, () => {
  console.log("Server started");
  console.log("http://localhost:8000")
});
