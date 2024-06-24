
// OpenWeatherMap API key
const apikey = 'd1845658f92b31c64bd94f06f7188c9c';

// Variables to store DOM elements
let response;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let cityName = document.querySelector(".city");
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

// Function to fetch weather data from OpenWeatherMap API
async function checkWeather(city) {
    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    const data = await response.json();

    // Log the API response data to console
    console.log(data);

    // Update UI with fetched weather data
    cityName.innerHTML = data.name;
    temp.innerText = `${Math.round(data.main.temp)} °C`;
    humidity.innerText = `${data.main.humidity} %`;
    wind.innerText = `${data.wind.speed} km/h`;

    // Set weather icon based on weather condition
    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        default:
            weatherIcon.src = ""; // Handle unknown conditions
            break;
    }

    // Display the weather information by removing the 'hidden' class
    document.querySelector('.weather').classList.remove('hidden');
}

// Event listener for the search button click
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});
