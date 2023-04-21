const apiKey = "ef28bcaad68fa1480f257d224b552f4d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function AppWeather(){
     const response = await fetch (apiUrl + `&appid=${apiKey}`);
     var data = await response.json();
     console.log(data);
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = data.main.temp;
     document.querySelector(".humidity").innerHTML = data.main.humidity;
     document.querySelector(".wind").innerHTML = data.wind.speed     
}

AppWeather();

////http://api.openweathermap.org/data/2.5/forecast/daily?APPID=12345&q=.

//863242cfb2b1d357e6093d9a4df19a4b

///84cbcebb3107b4c37c1aa3799dd349f7

//ef28bcaad68fa1480f257d224b552f4d