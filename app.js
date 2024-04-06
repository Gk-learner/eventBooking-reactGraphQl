const express = require("express");
const bodyPareer = require("body-parser");

const app = express();

app.use(bodyPareer.json());

app.get("/", (req, res, next) => {
  res.send("Hello there!! Let's start learning");
});

app.listen(8000);
