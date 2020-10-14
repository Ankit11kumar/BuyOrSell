const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.listen(3001, () => {
  console.log(`app is listening to port 3001`);
});

module.exports = app;
