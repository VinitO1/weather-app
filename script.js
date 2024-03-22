const apikey = "6a694543227bb22b2b946dfa1069f60e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const DislayCity = document.querySelector(".search-bar");
const SearchBtn = document.querySelector(".searchButton");
const weatherIcon = document.querySelector(".weather-icon");



async function getWeatherData(DislayCity) {
    const response = await fetch(apiurl + DislayCity + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round((data.main.temp)) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "images/wind.png";
        }
        else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "images/wind.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
SearchBtn.addEventListener("click", () => {
    getWeatherData(DislayCity.value)
});
