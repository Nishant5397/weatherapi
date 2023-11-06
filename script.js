// API Key and endpoint
const apiKey = "840de593b7028de6e424162454790fe5";
const apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";

// DOM elements
const cityInput = document.getElementById("city-input");
const searchButton = document.getElementById("search-button");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weather-description");
const closeButton = document.getElementById("close-button");

// Event listener for the search button
searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetchWeatherData(city);
    }
});

// Event listener for the close button
closeButton.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Function to fetch weather data from the API
function fetchWeatherData(city) {
    const apiUrl = `${apiEndpoint}?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract and display data in the overlay
            cityName.textContent = `City: ${data.name}`;
            temperature.textContent = `Temperature: ${data.main.temp}°C`;
            weatherDescription.textContent = `Weather: ${data.weather[0].main}, ${data.weather[0].description}`;
            overlay.style.display = "block";
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            cityName.textContent = "City not found.";
            temperature.textContent = "";
            weatherDescription.textContent = "";
            overlay.style.display = "block";
        });
}
