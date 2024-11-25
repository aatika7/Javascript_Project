const apiKey = "a043d1be3ab9629bfb7f8dfa8484131a";
const apiBaseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input"); 
const btn = document.querySelector(".search button"); 

// Function to fetch and display weather
async function checkWeather(city) {
    const response = await fetch(apiBaseURL + city + `&appid=${apiKey}`);
    
    if (response.ok) {
        const data = await response.json();
        console.log(data); 
        // Update weather details in DOM
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;
    } 
    else {
        // Handle invalid city
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "--";
        document.querySelector(".humidity").innerHTML = "--";
        document.querySelector(".wind").innerHTML = "--";
    }
   
}

// Event listener for search button
btn.addEventListener("click", () => {
    const city = searchBox.value.trim(); // Get user input
    if (city) {
        checkWeather(city);
    } 
    else {
        alert("Please enter a city name.");
    }
});

// Default city weather (Lahore)
checkWeather("Lahore");
