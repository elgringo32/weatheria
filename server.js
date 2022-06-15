const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const PORT = 8000;
require("dotenv").config();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  try {
    res.sendFile("./index.html");
  } catch (error) {
    console.log(error);
  }
});

app.post("/getInfo", (req, res) => {
  try {
    console.log(req.body);
    // console.log(req);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
