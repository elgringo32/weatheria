import { createApi } from "unsplash-js";
import express from "express";
import fetch from "node-fetch";

global.fetch = fetch;
const app = express();
const PORT = process.env.PORT;
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("dist"));
app.set("views", "./dist/views");
app.set("view engine", "ejs");

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

// FETCH CITY PICTURE FROM UNSPLASH
const fetchPhoto = async (city) => {
  const photo = await unsplash.search.getPhotos({
    query: city,
    page: 1,
    perPage: 10,
    orientation: "landscape",
  });
  return photo;
};

app.get("/", (req, res) => {
  try {
    res.render("index.ejs");
  } catch (error) {
    console.log(error);
  }
});

app.post("/getInfo", (req, res) => {
  try {
    const city = req.body.city;
    console.log(city);
    const photo = fetchPhoto(city);
    console.log(photo);
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
