const apiKey = "ef28bcaad68fa1480f257d224b552f4d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchEl = document.querySelector(".search input");
const btnEl = document.querySelector(".search button");
const iconEl = document.querySelector(".icon");

async function AppWeather(city){
     const response = await fetch (apiUrl+ city +`&appid=${apiKey}`);
     var data = await response.json();
     console.log(data);
     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
     document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
     document.querySelector(".wind").innerHTML = data.wind.speed +" Km/h" ;   
     
     if(data.weather[0].main == "Clear"){
     iconEl.src="./content/img/clear.png"
  }else if(data.weather[0].main == "Clouds"){
     iconEl.src="./content/img/clouds.png"
  }else if(data.weather[0].main == "Rain"){
     iconEl.src="./content/img/rain.png"
  }else if(data.weather[0].main == "Drizzle"){
     iconEl.src="./content/img/drizzle.png"
  }else if(data.weather[0].main == "Mist"){
     iconEl.src="./content/img/mist.png"
  }

  document.querySelector(".hidden").style.display="block"
}

btnEl.addEventListener("click", ()=>{
     AppWeather(searchEl.value);
})






////http://api.openweathermap.org/data/2.5/forecast/daily?APPID=12345&q=.

//863242cfb2b1d357e6093d9a4df19a4b

///84cbcebb3107b4c37c1aa3799dd349f7

//ef28bcaad68fa1480f257d224b552f4d