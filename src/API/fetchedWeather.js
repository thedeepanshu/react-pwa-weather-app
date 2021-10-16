import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_KEY;

export const fetchedWeather = async (query) => {
  const { data } = await axios
    .get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    })
    .catch((err) => console.log(err));

  return data;
};
