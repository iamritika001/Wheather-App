let APIKey = "273b8ea2a9c61501d98e9c8cec08061d";
let APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function WeatherCheck() {
  let response = await fetch(APIUrl + `&appid=${APIKey}`);
  let data = await response.json();
}
