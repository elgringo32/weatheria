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
    perPage: 20,
    orientation: "landscape",
    contentFilter: "high",
    orderBy: "relevant",
  });
  const photosArr = photo.response.results;
  const randomIndex = Math.floor(Math.random() * 20);
  const randomPhoto = photosArr[randomIndex].urls.regular;
  const photoAltDescription = photosArr[randomIndex].alt_description;
  return { randomPhoto, photoAltDescription };
};

// FETCH WEATHER INFO FROM OPEN WEATHER API
const fetchWeather = async (city) => {
  const weather =
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`)
  return weather
}



app.get("/", (req, res) => {
  try {
    res.render("index.ejs");
  } catch (error) {
    console.log(error);
  }
});

app.post("/getInfo", async (req, res) => {
  try {
    // const city = req.body.city;

    // const photo = (await fetchPhoto(city)).randomPhoto;
    // const altText = (await fetchPhoto(city)).photoAltDescription;
    // const image = {
    //   image: photo,
    //   text: altText,
    //   city: city.toUpperCase()
    // };

    // let weather = (await fetchWeather(city)).json()
    // weather = await weather
    // console.log(weather)
    // console.log(weather.main.temp)

    res.render("info.ejs", 
    // {
    //   image: image,
    //   weather: weather,
    // }
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
