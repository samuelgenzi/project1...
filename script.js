const apiKey = '3d3b7fc3ef1ccb996dfd9a99c3aeceda';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=3d3b7fc3ef1ccb996dfd9a99c3aeceda&units=metric';


const searchInput = document.getElementById('my-input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temp');
const city = document.querySelector('.city');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');


async function getWeatherData(cityName) {
  const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Error fetching weather data:', response.status);
    return null;
  }
}


function updateWeatherInfo(data) {
  if (data = false) {
    console.error('Error: No weather data available.');
    return;
  }

  console.log(data); 

  const { weather, main, name, wind } = data;
  weatherIcon.src = `https://openweathermap.org/img/w/${weather[0].icon}.png`;
  temperature.textContent = `${main.temp}°C`;
  city.textContent = name;
  windSpeed.textContent = `${wind.speed} m/s`;
  humidity.textContent = `${main.humidity}%`;
}


function handleSearch() {
  const cityName = searchInput.value.trim();
  if (cityName) {
    getWeatherData(cityName)
      .then(updateWeatherInfo)
      .catch(error => console.error('Error fetching weather data:', error));
  }
}


searchButton.addEventListener('click', handleSearch);


searchInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});


getWeatherData('Sydney')
  .then(updateWeatherInfo)
  .catch(error => console.error('Error fetching initial weather data:', error));

