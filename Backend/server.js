const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/career", (req, res) => {
  res.send("<h1>Here is an Opportunity for you</h1>");
});
console.log("I am out Side of server");

app.listen(port, () => {
  console.log(`App is listning on port ${port}`);
});
